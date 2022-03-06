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
import { jsx as _jsx } from "react/jsx-runtime";
var ProgressBar = function (props) {
    var percent = props.percent, styles = props.styles, showText = props.showText, theme = props.theme, barHeight = props.barHeight;
    return (_jsx("div", __assign({ className: "my-progress-bar", style: styles }, { children: _jsx("div", __assign({ className: "outer-progress-bar", style: { height: barHeight + "px" } }, { children: _jsx("div", __assign({ className: "inner-progress-bar-wrapper", style: { width: "".concat(percent, "%") } }, { children: _jsx("div", __assign({ className: "inner-progress-bar color-".concat(theme) }, { children: showText && _jsx("span", __assign({ className: "inner-text" }, { children: "".concat(percent, "%") }), void 0) }), void 0) }), void 0) }), void 0) }), void 0));
};
ProgressBar.defaultProps = {
    theme: "primary",
    showText: true,
    barHeight: 20
};
export default ProgressBar;
