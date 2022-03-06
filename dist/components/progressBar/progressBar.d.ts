import { FC } from "react";
import { ThemeProps } from "../icon/icon";
interface ProgressBarProps {
    percent: number;
    styles?: React.CSSProperties;
    theme?: ThemeProps;
    barHeight?: number;
    showText?: boolean;
}
declare const ProgressBar: FC<ProgressBarProps>;
export default ProgressBar;
