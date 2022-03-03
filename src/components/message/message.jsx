import ReactDOM from 'react-dom';
import MessageWrapper from './MessageWrapper';



export const msg = (function() {
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
    error: (message) => {
      messageWrapper.add({
        key: Math.random().toString().slice(2),
        message,
        alertType: 'error'
      })
    },
    success: (message) => {
      messageWrapper.add({
        key: Math.random().toString().slice(2),
        message,
        alertType: 'success'
      })
    },
  }
})()

