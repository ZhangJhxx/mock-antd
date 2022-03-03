import {FC, DragEvent, useState} from "react"
import classNames from "classnames"
interface DragProps{
  onFile:(file:FileList)=>void;
}
const Dragger:FC<DragProps> = (props) =>{
  const {onFile, children} = props;
  const [dragover, setDragover] = useState<boolean>(false);
  const classes = classNames("my-drag-componet",{"is-dragover":dragover});
  const handleDrag = (e:DragEvent<HTMLElement>, over:boolean) =>{
    e.preventDefault();
    setDragover(over);
  }
  const handleDrop = (e:DragEvent<HTMLElement>) =>{
    e.preventDefault();
    setDragover(false);
    onFile(e.dataTransfer.files);
  }
  return (
    <div
      className={classes}
      onDragOver={(e)=>handleDrag(e, true)}
      onDragLeave={(e)=>handleDrag(e, false)}
      onDrop={handleDrop}
    >
      {children}
    </div>
  )
}

export default Dragger;