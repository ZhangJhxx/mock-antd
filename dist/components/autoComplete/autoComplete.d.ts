import { FC, ReactElement } from "react";
import { InputProps } from "../input/input";
interface DataSourceObject {
    value: string;
    width: string;
}
export declare type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
    fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    onSelect?: (item: string) => void;
    renderOption?: (item: DataSourceType<any>) => ReactElement;
}
declare const AutoComplete: FC<AutoCompleteProps>;
export default AutoComplete;
