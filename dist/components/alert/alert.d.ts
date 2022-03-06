import React from 'react';
export declare type alertType = "success" | "error" | "warning" | "default";
interface AlertProps {
    className?: string;
    alertType: alertType;
    message: string;
    autoClose?: boolean;
    durationTime?: number;
    closeAble?: boolean;
    onHide?: () => void;
    onClose?: () => void;
    style?: any;
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
