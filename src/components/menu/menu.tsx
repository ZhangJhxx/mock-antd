import React,{useState, createContext} from 'react'
import classNames from "classnames"
import {MenuItemProps} from "./menuItem"
type MenuMode = 'horizontal' | 'vertical';
type selectedCallback = (selectedIndex:string) => void;
export interface MenuProps{
  //默认第几个active
  defaultIndex?:string;
  className?:string;
  mode?:MenuMode;
  style?:React.CSSProperties;
  defaultOpenArr?: string[];
  // children: React.ReactNode;
  onSelect?:selectedCallback
}
export interface IMenuContext{
  index:string;
  onSelect?:selectedCallback;
  mode?:MenuMode;
  defaultOpenArr?: string[];
}
export const MenuContext = createContext<IMenuContext>({index:"0"})
const Menu:React.FC<MenuProps> = (props) => {
  const {
    className,
    children,
    mode,
    style,
    defaultIndex,
    defaultOpenArr,
    onSelect
  } = props
  //标记当前哪个Li是active的
  const [currentActive, setCurrentActive] = useState(defaultIndex);
  const handleClick = (index:string) => {
    setCurrentActive(index);
    if(onSelect){
      onSelect(index);
    }
  }
  const passContext:IMenuContext={
    index:currentActive? currentActive : "0",
    onSelect:handleClick,
    mode,
    defaultOpenArr
  }
  const classes = classNames("menu",className,{
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical"
  })

  const renderChildren = ()=>{
    return React.Children.map(children, (child,index)=>{
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const {displayName} = childElement.type;
      if(displayName === "MenuItem" || displayName === "SubMenu"){
        return React.cloneElement(childElement,{
          index:index.toString()
        });
      }else{
        console.error("warning: menu hash a child which is not a menuItem")
      }
    })
  }
  return (
    <ul className={classes} style={style} data-testid="menu-test">
      <MenuContext.Provider value = {passContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps={
  defaultIndex:"0",
  mode:"horizontal"
}

export default Menu;