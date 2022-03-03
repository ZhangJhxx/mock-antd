import classNames from "classnames"

type ButtonSize = 'lg'|'sm';
type ButtonType = 'primary' | 'secondary' | 'success' |'danger'|'default'|'info'|'dark'|'light'|'warning'|"error"|'link'|'default';
interface BaseButtonProps {
  className?: string
  href?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  label:string
  hollow?: boolean
  styles?:React.CSSProperties
}
type NativeButtonType = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type NativeAnchorHTMLType = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonType & NativeAnchorHTMLType>;

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    disabled,
    size,
    btnType,
    href,
    label,
    styles,
    hollow,
    ...restProps
  } = props;
  const classes = classNames('btn', className,{
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled,
    [`hollow-${btnType}`]: hollow && btnType
  })
  if (btnType === 'link' && href) {
    return (
      <a 
        href={href} 
        className={classes}
        {...restProps}>
        {label}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}>
        {label}
      </button>
    )
  }

}
Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button;