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
import { useState } from "react";
import classNames from "classnames";
var Dragger = function (props) {
    var onFile = props.onFile, children = props.children;
    var _a = useState(false), dragover = _a[0], setDragover = _a[1];
    var classes = classNames("my-drag-componet", { "is-dragover": dragover });
    var handleDrag = function (e, over) {
        e.preventDefault();
        setDragover(over);
    };
    var handleDrop = function (e) {
        e.preventDefault();
        setDragover(false);
        onFile(e.dataTransfer.files);
    };
    return (_jsx("div", __assign({ className: classes, onDragOver: function (e) { return handleDrag(e, true); }, onDragLeave: function (e) { return handleDrag(e, false); }, onDrop: handleDrop }, { children: children }), void 0));
};
export default Dragger;
