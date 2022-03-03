import {FC,ReactElement,InputHTMLAttributes,ChangeEvent} from 'react';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import classNames from "classnames";
import Icon from "../icon/icon"

type InputSize = "lg" | "sm" ;

//Omit 忽略继承接口中冲突的属性 ，这里是size冲突
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>,'size'> {
  disabled?: boolean;
  size?: InputSize;
  icon?: IconProp;
  prepend?:string|ReactElement;
  append?:string|ReactElement;
  onChange?:(e:ChangeEvent<HTMLInputElement>) => void;
}
const Input:FC<InputProps> = (props)=>{
  //取属性
  const {disabled,size,icon,prepend,append,style,className,...restProps} = props
  //根据属性计算不同的className
  const classes = classNames("my-input-wrapper",className,{
    [`input-size-${size}`]:size,
    'is-disabled':disabled,
    'input-group':prepend||append,
    'input-group-append':!!append,
    'input-group-prepend':!!prepend
  })
  const fixControlledValue = (value:any) =>{
    if(value === null || typeof value === "undefined"){
      return '';
    }
    return value;
  }
  if("value" in props){
    restProps.value = fixControlledValue(props.value); 
  }
  return(
    //根据属性判断是否要添加特定的节点
    <div className={classes} style={style}>
      {prepend && <div className="my-input-group-prepend">{prepend}</div>}
      {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`}/></div>}
      <input 
        className="my-input-inner"
        disabled={disabled}
        {...restProps}
      />
      {append && <div className="my-input-group-append">{append}</div>}
    </div>
  )
}
export default Input;