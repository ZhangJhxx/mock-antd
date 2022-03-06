import { FC } from 'react';
declare type UploadFileStatus = "ready" | "success" | "error" | "uploading";
export interface UploadFile {
    uid: string;
    size: number;
    name: string;
    status?: UploadFileStatus;
    percent: number;
    raw?: File;
    response?: any;
    error?: any;
}
export interface UploadProps {
    action: string;
    onFileChange?: (file: File) => void;
    beforeUpload?: (file: File) => boolean | Promise<File>;
    onProgress?: (percentage: number, file: File) => void;
    onSuccess?: (data: any, file: File) => void;
    onError?: (err: any, file: File) => void;
    onFileRemove?: (file: UploadFile) => void;
    multiple?: boolean;
    accept?: string;
    name?: string;
    headers?: {
        [key: string]: any;
    };
    data?: {
        [key: string]: any;
    };
    withCredentials?: boolean;
    dragable?: boolean;
}
declare const Upload: FC<UploadProps>;
export default Upload;
