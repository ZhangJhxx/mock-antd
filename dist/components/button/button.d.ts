/// <reference types="react" />
declare type ButtonSize = 'lg' | 'sm';
declare type ButtonType = 'primary' | 'secondary' | 'success' | 'danger' | 'default' | 'info' | 'dark' | 'light' | 'warning' | "error" | 'link' | 'default';
interface BaseButtonProps {
    className?: string;
    href?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    label: string;
    hollow?: boolean;
}
declare type NativeButtonType = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
declare type NativeAnchorHTMLType = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonType & NativeAnchorHTMLType>;
declare const Button: React.FC<ButtonProps>;
export default Button;
