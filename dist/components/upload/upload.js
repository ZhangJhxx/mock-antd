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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import axios from 'axios';
import UploadList from "./uploadList";
import Dragger from "./dragCom";
import Icon from '../icon/icon';
import Button from "../button/button";
var Upload = function (props) {
    var action = props.action, onFileChange = props.onFileChange, beforeUpload = props.beforeUpload, onProgress = props.onProgress, onSuccess = props.onSuccess, onError = props.onError, onFileRemove = props.onFileRemove, multiple = props.multiple, data = props.data, headers = props.headers, withCredentials = props.withCredentials, name = props.name, accept = props.accept, dragable = props.dragable, children = props.children;
    var fileInput = useRef(null);
    var _a = useState([]), fileList = _a[0], setFileList = _a[1];
    var handleClick = function () {
        if (fileInput.current) {
            fileInput.current.click();
        }
    };
    var updateFileList = function (updateFile, fileObj) {
        setFileList(function (prevsiousList) {
            return prevsiousList.map(function (file) {
                if (file.uid === updateFile.uid) {
                    return __assign(__assign({}, file), fileObj);
                }
                else {
                    return file;
                }
            });
        });
    };
    var handleFileChange = function (e) {
        var files = e.target.files;
        if (!files) {
            return;
        }
        uploadFiles(files);
        if (fileInput.current) {
            fileInput.current.value = '';
        }
    };
    var postFile = function (file) {
        var _file = {
            uid: Date.now() + 'upload_file',
            size: file.size,
            name: file.name,
            status: "ready",
            percent: 0,
            raw: file
        };
        setFileList(function (prevsiousList) { return __spreadArray([_file], prevsiousList, true); });
        var formData = new FormData();
        formData.append(name || "file", file);
        if (data) {
            Object.keys(data).forEach(function (key) {
                formData.append(key, data[key]);
            });
        }
        axios.post(action, formData, {
            headers: __assign({ 'Content-Type': 'multipart/form-data' }, headers),
            withCredentials: withCredentials,
            onUploadProgress: function (e) {
                var percentage = Math.round((e.loaded * 100) / e.total) || 0;
                updateFileList(_file, { percent: percentage, status: "uploading" });
                if (percentage < 100) {
                    if (onProgress) {
                        onProgress(percentage, file);
                    }
                }
            }
        }).then(function (resp) {
            updateFileList(_file, { status: "success", response: resp.data });
            if (onSuccess) {
                onSuccess(resp.data, file);
            }
        }).catch(function (err) {
            updateFileList(_file, { status: "error", error: err });
            if (onError) {
                onError(err, file);
            }
        }).finally(function () {
            if (onFileChange) {
                onFileChange(file);
            }
        });
    };
    var uploadFiles = function (files) {
        var postFiles = Array.from(files);
        postFiles.forEach(function (file) {
            if (!beforeUpload) {
                postFile(file);
            }
            else {
                var res = beforeUpload(file);
                if (res && res instanceof Promise) {
                    res.then(function (data) {
                        postFile(data);
                    });
                }
                else if (res === true) {
                    postFile(file);
                }
            }
        });
    };
    var handleRemove = function (_file) {
        setFileList(function (prevsiousList) { return prevsiousList.filter(function (file) {
            return file.uid !== _file.uid;
        }); });
        if (onFileRemove) {
            onFileRemove(_file);
        }
    };
    return (_jsxs("div", __assign({ className: "my-upload-component" }, { children: [_jsxs("div", __assign({ className: "my-upload-input", onClick: handleClick }, { children: [dragable ?
                        _jsx(Dragger, __assign({ onFile: uploadFiles }, { children: children || (_jsxs(_Fragment, { children: [_jsx(Icon, { icon: "upload", size: "5x", theme: "secondary" }, void 0), _jsx("p", { children: "Drag file over to upload" }, void 0)] }, void 0)) }), void 0)
                        : _jsx(Button, { btnType: "primary", label: "Upload" }, void 0), _jsx("input", { "data-testid": "hidden-input", className: "my-file-input", style: { display: 'none' }, ref: fileInput, onChange: handleFileChange, type: "file", multiple: multiple, accept: accept }, void 0)] }), void 0), _jsx(UploadList, { fileList: fileList, onRemove: handleRemove }, void 0)] }), void 0));
};
Upload.defaultProps = {
    name: "file",
    // accept:"*"
};
export default Upload;
