import React, { useState, useEffect } from 'react';
import classNames from "classnames";
import Transition from "../transition";
import Icon from "../icon/icon";

export type alertType ="success" | "error" | "warning" | "default";

interface AlertProps {
  className?: string,
  alertType:alertType,
  message:string,
  autoClose?:boolean,
  durationTime?:number,
  closeAble?:boolean,
  onHide?:() => void,
  onClose?:()=>void,
  style?:any,
}

const Alert:React.FC<AlertProps> =(props) => {
  const {className, alertType, message,closeAble, autoClose, onClose, durationTime,onHide,style} = props;
  const [show, setShow] = useState(true);
 
  useEffect(() =>{
    closeAble && autoClose && setTimeout(() =>{
      setShow(false);
      if(onHide) onHide();
    },durationTime)
  },[])
  const classes = classNames('alert', className ,{
    [`alert-${alertType}`] : alertType
  })
  const handleClose =()=>{
    if(onClose) onClose();
    if(onHide) onHide();
    setShow(false);
  }
 
  return (
    <Transition 
      in={ show }
      timeout={300}
      animation="zoom-in-top">
      <div className={classes} style={style}>
        <span>
          {alertType === "success" && <Icon icon="check-circle" theme={alertType}/>}
          {alertType === "warning" && <Icon icon="exclamation-triangle" theme={alertType}/>}
          {alertType === "error" && <Icon icon="exclamation-circle" theme={alertType}/>}
          {alertType === "default" && <Icon icon="info-circle" theme="primary"/>}
        </span>
        <span className="message">{message}</span>
        <div className='close-icon-wrapper'>
          {closeAble && !autoClose ? 
            <Icon icon="times-circle" onClick={handleClose}/> : ""
          }
        </div>
      </div>
     </Transition>
    
  )
}
Alert.defaultProps={
  alertType: "default",
  autoClose: true,
  durationTime: 3000,
  closeAble:true
}
export default Alert;


