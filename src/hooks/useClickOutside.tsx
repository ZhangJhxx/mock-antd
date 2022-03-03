import { useEffect ,RefObject} from "react";

function useClickOutside(componentRef:RefObject<HTMLElement>,clickOutside:Function){
  useEffect(()=>{
    const listener = (e: MouseEvent) =>{
      if(! componentRef.current || componentRef.current.contains(e.target as HTMLElement)){
        return;
      }
      clickOutside(e);
    }
    window.addEventListener("click", listener);
    return ()=>{
      window.removeEventListener("click", listener);
    }
  },[componentRef,clickOutside]);
}
export default useClickOutside;