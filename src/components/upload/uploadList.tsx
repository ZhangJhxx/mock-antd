import {FC} from "react";
import {UploadFile} from "./upload"
import Icon from "../icon/icon"
import ProgressBar from "../progressBar/progressBar"


interface UploadListProps{
  fileList: UploadFile[];
  onRemove:(_file:UploadFile) => void;
}

const UploadList:FC<UploadListProps> = (props) =>{
  const {fileList, onRemove} = props;

  return (
    <ul className = "my-upload-list">
      {fileList.map(file=>{
        return (
          <li className="my-update-list-item" key={file.uid}>
            <span className={`file-name file-name-${file.status}`}>
              <Icon icon="file-alt" theme="secondary"/>
              {file.name}
            </span>
            <span className="file-status">
              {(file.status==="ready" || file.status === "uploading") && <Icon icon="spinner" spin theme="primary"/>}
              {file.status === "success" && <Icon icon="check-circle" theme="success"/>}
              {file.status === "error" &&  <Icon icon="times-circle" theme="danger"/>}
            </span>
            <span className="file-actions" >
              <Icon icon="times" onClick={()=>{onRemove(file)}}/>
            </span>
            {file.status==="uploading" && <ProgressBar percent={file.percent}/>}
          </li>
        )
      })}

    </ul>
  )
} 
export default UploadList