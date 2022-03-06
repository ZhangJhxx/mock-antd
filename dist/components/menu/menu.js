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
import React, { useState, createContext } from 'react';
import classNames from "classnames";
export var MenuContext = createContext({ index: "0" });
var Menu = function (props) {
    var className = props.className, children = props.children, mode = props.mode, style = props.style, defaultIndex = props.defaultIndex, defaultOpenArr = props.defaultOpenArr, onSelect = props.onSelect;
    //标记当前哪个Li是active的
    var _a = useState(defaultIndex), currentActive = _a[0], setCurrentActive = _a[1];
    var handleClick = function (index) {
        setCurrentActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var passContext = {
        index: currentActive ? currentActive : "0",
        onSelect: handleClick,
        mode: mode,
        defaultOpenArr: defaultOpenArr
    };
    var classes = classNames("menu", className, {
        "menu-vertical": mode === "vertical",
        "menu-horizontal": mode !== "vertical"
    });
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === "MenuItem" || displayName === "SubMenu") {
                return React.cloneElement(childElement, {
                    index: index.toString()
                });
            }
            else {
                console.error("warning: menu hash a child which is not a menuItem");
            }
        });
    };
    return (_jsx("ul", __assign({ className: classes, style: style, "data-testid": "menu-test" }, { children: _jsx(MenuContext.Provider, __assign({ value: passContext }, { children: renderChildren() }), void 0) }), void 0));
};
Menu.defaultProps = {
    defaultIndex: "0",
    mode: "horizontal"
};
export default Menu;
