import React from 'react';
import { alertType } from "../alert/alert";
interface addParams {
    message: string;
    alertType: alertType;
    key: string;
    durationTime?: number;
    autoClose?: boolean;
    index: number;
}
declare class MessageWrapper extends React.Component {
    state: {
        list: addParams[];
    };
    add: (params: addParams) => void;
    handleHide: (msg: addParams) => void;
    render(): JSX.Element;
}
export default MessageWrapper;
