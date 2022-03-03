import React from 'react';
import Alert,{alertType} from "../alert/alert";
interface addParams{
  message: string;
  alertType: alertType;
  key: string;
  durationTime?:number;
  autoClose?:boolean;
  index:number;
}
class MessageWrapper extends React.Component {
  state = { 
    list: Array<addParams>()
  }
  add = (params:addParams) => {
    this.setState({
      list: this.state.list.concat([params])
    })
  }
  handleHide = (msg:addParams) => {
    this.setState({
      list: this.state.list.filter(item => item.key !== msg.key)
    })
  }
  render() {
    return <div className="message-wrapper">
      {
        this.state.list.map((item,idx) => <Alert style={{top:`${idx*70+10}px`}} onHide={this.handleHide.bind(this, item)} {...item}></Alert>)
      }
    </div>
  }
}

export default MessageWrapper;
