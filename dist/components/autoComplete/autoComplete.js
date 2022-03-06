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
import { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import Input from "../input/input";
import Icon from "../icon/icon";
import useDebounce from "../../hooks/useDebounce";
import useClickOutside from "../../hooks/useClickOutside";
var AutoComplete = function (props) {
    var fetchSuggestions = props.fetchSuggestions, onSelect = props.onSelect, renderOption = props.renderOption, value = props.value, width = props.width, restProps = __rest(props, ["fetchSuggestions", "onSelect", "renderOption", "value", "width"]);
    var _a = useState(value), inputValue = _a[0], setInputValue = _a[1];
    var _b = useState([]), suggestion = _b[0], setSuggestion = _b[1];
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var _d = useState(0), curIndex = _d[0], setCurIndex = _d[1];
    var searchFlag = useRef(false);
    var componentRef = useRef(null);
    var debouncedValue = useDebounce(inputValue);
    useClickOutside(componentRef, function () { setSuggestion([]); });
    useEffect(function () {
        if (debouncedValue && searchFlag.current) {
            setLoading(true);
            var suggestions = fetchSuggestions(debouncedValue);
            if (suggestions instanceof Promise) {
                suggestions.then(function (data) {
                    setSuggestion(data);
                    setLoading(false);
                });
            }
            else {
                setSuggestion(suggestions);
            }
        }
        else {
            setSuggestion([]);
        }
    }, [debouncedValue]);
    var handleChange = function (e) {
        var value = e.target.value.trim();
        setInputValue(value);
        searchFlag.current = true;
    };
    function handleSwitch(index) {
        if (index < 0)
            index = 0;
        if (index >= suggestion.length)
            index = suggestion.length - 1;
        setCurIndex(index);
    }
    var handleSelect = function (suggestion) {
        setInputValue(suggestion.value);
        setSuggestion([]);
        if (onSelect) {
            onSelect(suggestion.value);
        }
        searchFlag.current = false;
    };
    var handleKeyEvent = function (e) {
        switch (e.key) {
            case "Enter":
                if (suggestion[curIndex]) {
                    handleSelect(suggestion[curIndex]);
                }
                break;
            case "ArrowUp":
                handleSwitch(curIndex - 1);
                break;
            case "ArrowDown":
                handleSwitch(curIndex + 1);
                break;
            case "Escape":
                setSuggestion([]);
                break;
            default:
                break;
        }
    };
    var renderTemplate = function (item) {
        if (renderOption) {
            return renderOption(item);
        }
        else {
            return item.value;
        }
    };
    var genDropdown = function () {
        return (_jsx("ul", __assign({ className: "suggestion-list" }, { children: suggestion.map(function (sg, index) {
                return _jsx("li", __assign({ onClick: function () { return handleSelect(sg); }, className: classNames("suggestion-item", { "is-active": curIndex === index }) }, { children: renderTemplate(sg) }), sg.value);
            }) }), void 0));
    };
    return (_jsxs("div", __assign({ className: "auto-complete", style: { width: width }, ref: componentRef }, { children: [_jsx(Input, __assign({ value: inputValue, onChange: handleChange, onKeyDown: handleKeyEvent }, restProps), void 0), loading && _jsx(Icon, { icon: "spinner", spin: true }, void 0), !loading && suggestion.length > 0 && genDropdown()] }), void 0));
};
export default AutoComplete;
