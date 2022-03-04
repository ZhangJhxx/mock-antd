import Message from "./message"
import Button from "../button/button"

export default {
  title: 'Components/Message',
  component: Message,
  argTypes: {
  }
} 

export const success = ()=>{
  return (
      <Button label="success" btnType="success" hollow={true} onClick={()=>{Message.success("success")}} style={{marginRight:"20px"}}/>
  )
}
export const error = ()=>{
  return (
      <Button label="error" btnType="error" hollow={true} onClick={()=>{Message.error("error")}} style={{marginRight:"20px"}}/>
  )
}
export const warning = ()=>{
  return (
      <Button label="warning" btnType="warning" hollow={true} onClick={()=>{Message.warning("warning")}}/>
  )
}