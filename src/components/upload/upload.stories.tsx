import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import Upload,{UploadProps} from './upload';

export default {
  title: 'Components/Upload',
  component: Upload,
  argTypes: {
    multiple:{control:{type:"boolean"}}
  }
} as ComponentMeta<typeof Upload>;

const strainFileSize = (file:File)=>{
  const fileSize = file.size/1024;
  if(fileSize > 50){
    alert("filesize cannot be greater than 50");
    return false;
  }
  return true;
}

const filePromise = (file:File) => {//这块相当于能完成重命名
  const newFile = new File([file],"renamed file",{type: file.type});
  return Promise.resolve(newFile);
}

const defaultUpload: ComponentStory<typeof Upload>=(args)=>{
  return (
    <Upload 
      action="https://jsonplaceholder.typicode.com/posts"
      onProgress={action("Progress")}
      onSuccess={action("success")}
      onError={action("error")}
      onFileChange={action("onChange")}
      headers={{"x-www":"succcssss"}}
      multiple={true}
      dragable={true}
      // beforeUpload={strainFileSize}
      >
      </Upload>
  )
}
export const myUpload = defaultUpload.bind({});
myUpload.args={
  multiple:false,
}
