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
import Icon from "../icon/icon";
import ProgressBar from "../progressBar/progressBar";
var UploadList = function (props) {
    var fileList = props.fileList, onRemove = props.onRemove;
    return (_jsx("ul", __assign({ className: "my-upload-list" }, { children: fileList.map(function (file) {
            return (_jsxs("li", __assign({ className: "my-update-list-item" }, { children: [_jsxs("span", __assign({ className: "file-name file-name-".concat(file.status) }, { children: [_jsx(Icon, { icon: "file-alt", theme: "secondary" }, void 0), file.name] }), void 0), _jsxs("span", __assign({ className: "file-status" }, { children: [(file.status === "ready" || file.status === "uploading") && _jsx(Icon, { icon: "spinner", spin: true, theme: "primary" }, void 0), file.status === "success" && _jsx(Icon, { icon: "check-circle", theme: "success" }, void 0), file.status === "error" && _jsx(Icon, { icon: "times-circle", theme: "danger" }, void 0)] }), void 0), _jsx("span", __assign({ className: "file-actions" }, { children: _jsx(Icon, { icon: "times", onClick: function () { onRemove(file); } }, void 0) }), void 0), file.status === "uploading" && _jsx(ProgressBar, { percent: file.percent }, void 0)] }), file.uid));
        }) }), void 0));
};
export default UploadList;
