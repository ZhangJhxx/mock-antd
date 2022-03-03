import {useEffect,useState} from 'react'

function useDebounce(value:string,delay:number=300){
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() =>{
    const timer = window.setTimeout(()=>{
      setDebounceValue(value);
    },delay);
    return ()=>{
      window.clearTimeout(timer);
    }
  },[value,delay]);
  return debounceValue;
}

export default useDebounce;