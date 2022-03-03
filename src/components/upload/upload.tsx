import { FC, ChangeEvent, useRef, useState } from 'react'
import axios from 'axios'

import UploadList from "./uploadList";
import Dragger from "./dragCom";
import Icon from '../icon/icon';
import Button from "../button/button"

type UploadFileStatus = "ready" | "success" | "error" | "uploading";
export interface UploadFile{
  uid:string;
  size:number;
  name:string;
  status?: UploadFileStatus;
  percent: number;
  raw?:File;
  response?:any;
  error?: any;
}

export interface UploadProps {
  action: string;
  onFileChange?:(file:File)=>void;
  beforeUpload?:(file:File)=>boolean | Promise<File>;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
  onFileRemove?:(file:UploadFile) => void;
  multiple?: boolean;//是否可以多选上传
  accept?: string;//接受的文件种类
  name?: string;//规定文件名
  headers?: {[key:string]:any};//头部信息
  data?: {[key:string]:any};//上传文件携带的额外数据
  withCredentials?: boolean;
  dragable?: boolean;
}

export const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    onFileChange,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onFileRemove,
    multiple,
    data,
    headers,
    withCredentials,
    name,
    accept,
    dragable,
    children
  } = props
  const fileInput = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }
  const updateFileList = (updateFile:UploadFile, fileObj:Partial<UploadFile>) => {
    setFileList(prevsiousList=>{
      return prevsiousList.map(file=>{
        if(file.uid === updateFile.uid){
          return {...file, ...fileObj}
        }else{
          return file;
        }
      })
    })
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if(!files) {
      return
    }
    uploadFiles(files)
    if (fileInput.current) {
      fileInput.current.value = ''
    }
  }
  const postFile = (file:File) => {
    const _file: UploadFile={
      uid: Date.now()+'upload_file',
      size: file.size,
      name: file.name, 
      status:"ready",
      percent:0,
      raw:file
    }
    setFileList(prevsiousList=>[_file,...prevsiousList]);
    const formData = new FormData()
      formData.append(  name || "file", file);
      if(data){
        Object.keys(data).forEach(key =>{
          formData.append(key, data[key]);
        })
      }
      axios.post(action, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...headers
        },
        withCredentials,
        onUploadProgress: (e) => {
          let percentage = Math.round((e.loaded * 100) / e.total) || 0;
          updateFileList(_file,{percent:percentage,status:"uploading"})
          if (percentage < 100) {
            if (onProgress) {
              onProgress(percentage, file)
            }
          }
        }
      }).then(resp => {
        updateFileList(_file,{status:"success",response:resp.data});
        if (onSuccess) {
          onSuccess(resp.data, file)
        }
      }).catch(err => {
        updateFileList(_file,{status:"error",error:err});
        if (onError) {
          onError(err, file)
        }
      }).finally(()=>{
        if(onFileChange){
          onFileChange(file);
        }
      })
  }
  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files)
    postFiles.forEach(file => {
      if(!beforeUpload){
        postFile(file);
      }else{
        const res = beforeUpload(file);
        if(res && res instanceof Promise){
          res.then((data)=>{
            postFile(data);
          })
        }else if( res === true){
          postFile(file);
        }
      }
    })
  }
  const handleRemove = (_file:UploadFile) =>{
    setFileList(prevsiousList=> prevsiousList.filter(file=>{
      return file.uid !== _file.uid;
    }));
    if(onFileRemove){
      onFileRemove(_file);
    }
  }

  return (
    <div className="my-upload-component">
      <div 
        className="my-upload-input"
        onClick={handleClick}
      >
        {dragable ? 
        <Dragger onFile={uploadFiles}>
          {children || (
            <>
              <Icon icon="upload" size="5x" theme="secondary" />
              {/* <br/> */}
              <p>Drag file over to upload</p>
            </>
          )}
        </Dragger> 
        :<Button btnType="primary" label="Upload" />
        }
      <input
        className="my-file-input"
        style={{display: 'none'}}
        ref={fileInput}
        onChange={handleFileChange}
        type="file"
        multiple={multiple}
        accept={accept}
        />
      </div>
      <UploadList 
        fileList={fileList}
        onRemove={handleRemove}
        />
      </div>
  )
}
Upload.defaultProps={
  name:"file", 
  // accept:"*"
}
export default Upload;