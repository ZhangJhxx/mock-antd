import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon ,FontAwesomeIconProps} from '@fortawesome/react-fontawesome'

export type ThemeProps = 'primary' | 'secondary' | 'success' |'danger'|'default'|'info'|'dark'|'light'|'warning'|"error";
interface iconProps extends FontAwesomeIconProps{
  theme?: ThemeProps
}
const Icon:React.FC<iconProps> = (props) => {
  const {className , theme , ...restProps} = props;
  
  const classes = classNames("my-icon", className,{
    [`icon-${theme}`]: theme
  })
  return (
    <FontAwesomeIcon className={classes} {...restProps} />
  )
}
export default Icon;