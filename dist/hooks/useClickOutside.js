import { useEffect } from "react";
function useClickOutside(componentRef, clickOutside) {
    useEffect(function () {
        var listener = function (e) {
            if (!componentRef.current || componentRef.current.contains(e.target)) {
                return;
            }
            clickOutside(e);
        };
        window.addEventListener("click", listener);
        return function () {
            window.removeEventListener("click", listener);
        };
    }, [componentRef, clickOutside]);
}
export default useClickOutside;
