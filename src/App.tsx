import React,{useState} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Button from './components/button/button'
import Menu from './components/menu/menu'
import MenuItem from './components/menu/menuItem'
import SubMenu from './components/menu/subMenu'
import Alert from "./components/alert/alert"
import InputDatePicker from "./components/inputDatePicker/inputDatePicker"
import Input from "./components/input/input"
import AutoComplete from "./components/autoComplete/autoComplete"
import {msg} from './components/message/message'
library.add(fas)
function Index(){
  const [ num ,setNumber ] = React.useState(0)
  console.log("render");
  
  const handerClick=()=>{
      for(let i=0; i<5;i++ ){
        setTimeout(() => {
          setNumber((num)=>num+1)
          console.log(num)
        }, 1000)
      }
  }
  return <button onClick={ handerClick } >{ num }</button>
}
function Component() {
  const [a, setA] = useState(1)
  const [b, setB] = useState('b')
  console.log('render')

  function handleClickWithPromise() {
    Promise.resolve().then(() => {
      setA((a) => a + 1)
      setA((a) => a + 1)

      console.log(a);
      
      setB('bb')
    })
  }

  function handleClickWithoutPromise() {
    setA((a) =>  a + 1)
    setA((a) =>  a + 1)
    console.log(a);
    setB('bb')
  }

  return (
    <>
      <button onClick={handleClickWithPromise}>
        {a}-{b} 异步执行
      </button>
      <button onClick={handleClickWithoutPromise}>
        {a}-{b} 同步执行
      </button>
    </>
  )
}



function App() {
  return (
    <div className="App">
      <Input style={{width:"300px"}}/>
      <div className="btn_group">
        <Button className="btn_alert" onClick={()=>msg.success("test")} size='sm' label="small"/>
        <Button size='lg' label="large" onClick={()=>msg.warning("disappear")} />
        <Button  btnType="primary" label="Primary"/>
        <Button  btnType="danger" label="Danger"/>
        <Button  hollow={true} btnType="link"  label="hollow"/>
        <Button href="http://baidu.com" target="_blank" btnType="link" label="Link"/>
      </div>
      <div className="menu_wrapper" >
        <Menu mode="horizontal" defaultOpenArr={["2"]}>
          <MenuItem>
            首页
          </MenuItem>
          <MenuItem disabled>
            登录
          </MenuItem>
          <SubMenu title="dropDown">
            <MenuItem>
              dropDown1
            </MenuItem>
            <MenuItem>
              dropDown2
            </MenuItem>
          </SubMenu>
          <MenuItem>
            注册
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default App;
