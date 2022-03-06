import { FC } from "react";
interface DragProps {
    onFile: (file: FileList) => void;
}
declare const Dragger: FC<DragProps>;
export default Dragger;
