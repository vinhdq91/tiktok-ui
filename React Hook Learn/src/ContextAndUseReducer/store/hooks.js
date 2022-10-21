import Context from "./Context";
import { useContext } from "react";
export const useStore = () => {
    console.log("Context: " + Context);
    const [state, dispatch] = useContext(Context);
    return [state, dispatch];
}