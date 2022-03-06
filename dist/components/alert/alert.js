var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import classNames from "classnames";
import Transition from "../transition";
import Icon from "../icon/icon";
var Alert = function (props) {
    var _a;
    var className = props.className, alertType = props.alertType, message = props.message, closeAble = props.closeAble, autoClose = props.autoClose, onClose = props.onClose, durationTime = props.durationTime, onHide = props.onHide, style = props.style;
    var _b = useState(true), show = _b[0], setShow = _b[1];
    useEffect(function () {
        closeAble && autoClose && setTimeout(function () {
            setShow(false);
            if (onHide)
                onHide();
        }, durationTime);
    }, []);
    var classes = classNames('alert', className, (_a = {},
        _a["alert-".concat(alertType)] = alertType,
        _a));
    var handleClose = function () {
        if (onClose)
            onClose();
        if (onHide)
            onHide();
        setShow(false);
    };
    return (_jsx(Transition, __assign({ in: show, timeout: 300, animation: "zoom-in-top" }, { children: _jsxs("div", __assign({ className: classes, style: style }, { children: [_jsxs("span", { children: [alertType === "success" && _jsx(Icon, { icon: "check-circle", theme: alertType }, void 0), alertType === "warning" && _jsx(Icon, { icon: "exclamation-triangle", theme: alertType }, void 0), alertType === "error" && _jsx(Icon, { icon: "exclamation-circle", theme: alertType }, void 0), alertType === "default" && _jsx(Icon, { icon: "info-circle", theme: "primary" }, void 0)] }, void 0), _jsx("span", __assign({ className: "message" }, { children: message }), void 0), _jsx("div", __assign({ className: 'close-icon-wrapper' }, { children: closeAble && !autoClose ?
                        _jsx(Icon, { icon: "times-circle", onClick: handleClose }, void 0) : "" }), void 0)] }), void 0) }), void 0));
};
Alert.defaultProps = {
    alertType: "default",
    autoClose: true,
    durationTime: 3000,
    closeAble: true
};
export default Alert;
