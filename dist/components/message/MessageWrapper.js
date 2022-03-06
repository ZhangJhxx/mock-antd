var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import React from 'react';
import Alert from "../alert/alert";
var style = {
    position: 'absolute',
    width: "fit-content",
    left: "50%",
    transform: "translate(-50%)",
};
var MessageWrapper = /** @class */ (function (_super) {
    __extends(MessageWrapper, _super);
    function MessageWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            list: Array()
        };
        _this.add = function (params) {
            _this.setState({
                list: _this.state.list.concat([params])
            });
        };
        _this.handleHide = function (msg) {
            _this.setState({
                list: _this.state.list.filter(function (item) { return item.key !== msg.key; })
            });
        };
        return _this;
    }
    MessageWrapper.prototype.render = function () {
        var _this = this;
        return _jsx("div", __assign({ className: "message-wrapper" }, { children: this.state.list.map(function (item, idx) { return _jsx(Alert, __assign({ style: __assign({ top: "".concat(idx * 70 + 10, "px") }, style), onHide: _this.handleHide.bind(_this, item) }, item), void 0); }) }), void 0);
    };
    return MessageWrapper;
}(React.Component));
export default MessageWrapper;
