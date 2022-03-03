import {FC,useState,ChangeEvent,KeyboardEvent,ReactElement,useEffect,useRef} from "react";
import classNames from "classnames";
import Input,{ InputProps } from "../input/input";
import Icon from "../icon/icon";
import useDebounce from "../../hooks/useDebounce"
import useClickOutside from "../../hooks/useClickOutside"


interface DataSourceObject{
  value: string;
  width:string;
}
export type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, "onSelect">{
  fetchSuggestions:(str:string)=>DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?:(item:string)=>void;
  renderOption?:(item:DataSourceType<any>)=>ReactElement;
}
const AutoComplete:FC<AutoCompleteProps>=(props)=>{
  const {fetchSuggestions, onSelect,renderOption, value,width,...restProps} = props;
  const [inputValue, setInputValue] = useState(value as string);
  const [suggestion, setSuggestion] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState(false);
  const [curIndex, setCurIndex] = useState(0);
  const searchFlag = useRef(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const debouncedValue = useDebounce(inputValue);
  useClickOutside(componentRef,()=>{setSuggestion([])})
  useEffect(()=>{
    if(debouncedValue && searchFlag.current){
      setLoading(true);  
      const suggestions = fetchSuggestions(debouncedValue);
      if(suggestions instanceof Promise){
        suggestions.then(data=>{
          setSuggestion(data);
          setLoading(false);
        })
      }else{
        setSuggestion(suggestions);
      }
    }else{
      setSuggestion([]);
    }
  },[debouncedValue]);
  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    const value = e.target.value.trim();
    setInputValue(value);
    searchFlag.current = true;
  }
  function handleSwitch(index:number){
    if(index < 0 ) index = 0;
    if(index >= suggestion.length) index = suggestion.length-1;
    setCurIndex(index);
  }
  const handleSelect = (suggestion:DataSourceType) => {
    setInputValue(suggestion.value);
    setSuggestion([]);
    if(onSelect){
      onSelect(suggestion.value);
    }
    searchFlag.current = false;
  }
  const handleKeyEvent=(e:KeyboardEvent<HTMLInputElement>)=>{
    switch(e.key) {
      case "Enter":
        if(suggestion[curIndex]){
          handleSelect(suggestion[curIndex]);
        }
        break;
      case "ArrowUp":
        handleSwitch(curIndex-1);
        break;
      case "ArrowDown":
        handleSwitch(curIndex+1);
        break;
      case "Escape":
        setSuggestion([]);
        break;
      default: 
        break;
    }
  }
  
  const renderTemplate = (item:DataSourceType) =>{
    if(renderOption){
      return renderOption(item);
    }else {
      return item.value;
    }
  }
  const genDropdown = () =>{
    
    return (
      <ul className="suggestion-list">
        {suggestion.map((sg,index) => 
          <li 
            key={sg.value} 
            onClick={()=>handleSelect(sg)}
            className={classNames("suggestion-item",{"is-active": curIndex === index})}>
            {renderTemplate(sg)}
          </li>
        )}
      </ul>
    )
  }
  return (
    <div className="auto-complete" style={{width:width}} ref={componentRef}>
      <Input 
        value={inputValue}
        onChange= {handleChange}
        onKeyDown= {handleKeyEvent}
        {...restProps}
      />
      {loading && <Icon icon="spinner" spin/>}
      {!loading && suggestion.length>0 && genDropdown()}
    </div>
  )
}
export default AutoComplete;