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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
import Icon from "../icon/icon";
var Input = function (props) {
    var _a;
    //取属性
    var disabled = props.disabled, size = props.size, icon = props.icon, prepend = props.prepend, append = props.append, style = props.style, className = props.className, restProps = __rest(props
    //根据属性计算不同的className
    , ["disabled", "size", "icon", "prepend", "append", "style", "className"]);
    //根据属性计算不同的className
    var classes = classNames("my-input-wrapper", className, (_a = {},
        _a["input-size-".concat(size)] = size,
        _a['is-disabled'] = disabled,
        _a['input-group'] = prepend || append,
        _a['input-group-append'] = !!append,
        _a['input-group-prepend'] = !!prepend,
        _a));
    var fixControlledValue = function (value) {
        if (value === null || typeof value === "undefined") {
            return '';
        }
        return value;
    };
    if ("value" in props) {
        restProps.value = fixControlledValue(props.value);
    }
    return (
    //根据属性判断是否要添加特定的节点
    _jsxs("div", __assign({ className: classes, style: style }, { children: [prepend && _jsx("div", __assign({ className: "my-input-group-prepend" }, { children: prepend }), void 0), icon && _jsx("div", __assign({ className: "icon-wrapper" }, { children: _jsx(Icon, { icon: icon, title: "title-".concat(icon) }, void 0) }), void 0), _jsx("input", __assign({ className: "my-input-inner", disabled: disabled }, restProps), void 0), append && _jsx("div", __assign({ className: "my-input-group-append" }, { children: append }), void 0)] }), void 0));
};
export default Input;
