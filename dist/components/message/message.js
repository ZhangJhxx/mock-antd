import ReactDOM from 'react-dom';
import MessageWrapper from './MessageWrapper';



const Message = (function() {
  let container = document.getElementById('message-container')
  if (!container) {
    container = document.createElement('div')
    container.setAttribute('id', 'message-container')
    document.body.appendChild(container)
  }

  const messageWrapper= ReactDOM.render(
    <MessageWrapper />,
    container
  );
  return {
    warning: (message,durationTime=3000,autoClose=true) => {
      messageWrapper.add({
        key: Math.random().toString().slice(2),
        message,
        alertType: 'warning',
        durationTime,
        autoClose
      })
    },
    error: (message,durationTime=3000,autoClose=true) => {
      messageWrapper.add({
        key: Math.random().toString().slice(2),
        message,
        alertType: 'error',
        durationTime,
        autoClose
      })
    },
    success: (message,durationTime=3000,autoClose=true) => {
      messageWrapper.add({
        key: Math.random().toString().slice(2),
        message,
        alertType: 'success',
        durationTime,
        autoClose
      })
    },
  }
})();
export default Message;

