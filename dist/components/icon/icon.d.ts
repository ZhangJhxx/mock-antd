import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
export declare type ThemeProps = 'primary' | 'secondary' | 'success' | 'danger' | 'default' | 'info' | 'dark' | 'light' | 'warning' | "error";
interface iconProps extends FontAwesomeIconProps {
    theme?: ThemeProps;
}
declare const Icon: React.FC<iconProps>;
export default Icon;
