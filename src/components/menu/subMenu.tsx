import React,{useContext, useState, FunctionComponentElement} from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import { MenuItemProps } from './menuItem';
import Icon from '../icon/icon';
import Transition from '../transition';


export interface SubMenuProps{
  index?:string;
  title:string;
  className?:string;
}

const SubMenu:React.FC<SubMenuProps> = (props) => {
  const { index, title, className,children } = props;
  const context = useContext(MenuContext);
  const defaultOpenArr = context.defaultOpenArr;
  const defaultOpen = index && (context.mode === "vertical") && Array.isArray(defaultOpenArr) ? defaultOpenArr.includes(index) :false;
  const [open, setOpen] = useState(defaultOpen);
  const handleClick = ()=>{
    if(context.onSelect &&  typeof index === "string"){
      context.onSelect(index);
    }
  }
  const classes = classNames("menu-item submenu-item", className, {
    'is-active': context.index === index,
    'is-vertical':context.mode === "vertical",
    'is-opened':open
    
  })
  let timer: any = null;
  const handleMouseEvent = (e:React.MouseEvent, toggle:boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => setOpen(toggle),300);
  }
  const hoverEvent = context.mode !== "vertical" ? {
    onMouseEnter: (e:React.MouseEvent) => handleMouseEvent(e,true),
    onMouseLeave: (e:React.MouseEvent) => handleMouseEvent(e,false),
    onClick: handleClick
  }
  :{}
  const clickEvent = context.mode === "vertical" ?{
    onClick : (e:React.MouseEvent) => {
      handleMouseEvent(e, !open);
      handleClick();
    }
  } :{}
  const renderChildren = () =>{
    const subMenuClasses = classNames("submenu",{
      "menu-opened":open
    });
    const childrenComponent = React.Children.map(children, (child,idx)=>{
      const childElement  = child as FunctionComponentElement<MenuItemProps>;
      if(childElement.type.displayName === "MenuItem"){
        return React.cloneElement(childElement,{
          index: `${index}-${idx}`
        });
      }else{
        console.error("warning: subMenu has a child that is not a menuItem");
      }
    })
    return (
      <Transition 
        in={open}
        timeout={300}
        animation="zoom-in-top"
      >
        <ul className={subMenuClasses}>
          {childrenComponent}
        </ul>
      </Transition>
      
    )
  }
  return (
    <li key={index} className={classes} {...hoverEvent}>
      <div className="submenu-title" {...clickEvent}>
        {title}
        <Icon icon="angle-down" className="angle-icon"/>
      </div>
      {renderChildren()}
    </li>
  )
}
SubMenu.displayName = "SubMenu";
export default SubMenu