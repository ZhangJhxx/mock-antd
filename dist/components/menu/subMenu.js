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
import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import Icon from '../icon/icon';
import Transition from '../transition';
var SubMenu = function (props) {
    var index = props.index, title = props.title, className = props.className, children = props.children;
    var context = useContext(MenuContext);
    var defaultOpenArr = context.defaultOpenArr;
    var defaultOpen = index && (context.mode === "vertical") && Array.isArray(defaultOpenArr) ? defaultOpenArr.includes(index) : false;
    var _a = useState(defaultOpen), open = _a[0], setOpen = _a[1];
    var handleClick = function () {
        if (context.onSelect && typeof index === "string") {
            context.onSelect(index);
        }
    };
    var classes = classNames("menu-item submenu-item", className, {
        'is-active': context.index === index,
        'is-vertical': context.mode === "vertical",
        'is-opened': open
    });
    var timer = null;
    var handleMouseEvent = function (e, toggle) {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(function () { return setOpen(toggle); }, 300);
    };
    var hoverEvent = context.mode !== "vertical" ? {
        onMouseEnter: function (e) { return handleMouseEvent(e, true); },
        onMouseLeave: function (e) { return handleMouseEvent(e, false); },
        onClick: handleClick
    }
        : {};
    var clickEvent = context.mode === "vertical" ? {
        onClick: function (e) {
            handleMouseEvent(e, !open);
            handleClick();
        }
    } : {};
    var renderChildren = function () {
        var subMenuClasses = classNames("submenu", {
            "menu-opened": open
        });
        var childrenComponent = React.Children.map(children, function (child, idx) {
            var childElement = child;
            if (childElement.type.displayName === "MenuItem") {
                return React.cloneElement(childElement, {
                    index: "".concat(index, "-").concat(idx)
                });
            }
            else {
                console.error("warning: subMenu has a child that is not a menuItem");
            }
        });
        return (_jsx(Transition, __assign({ in: open, timeout: 300, animation: "zoom-in-top" }, { children: _jsx("ul", __assign({ className: subMenuClasses }, { children: childrenComponent }), void 0) }), void 0));
    };
    return (_jsxs("li", __assign({ className: classes }, hoverEvent, { children: [_jsxs("div", __assign({ className: "submenu-title" }, clickEvent, { children: [title, _jsx(Icon, { icon: "angle-down", className: "angle-icon" }, void 0)] }), void 0), renderChildren()] }), index));
};
SubMenu.displayName = "SubMenu";
export default SubMenu;
