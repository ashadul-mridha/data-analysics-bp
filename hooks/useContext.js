import { useContext } from "react"
import { AllContext } from "../context";

const useContextHook = () => {
    const data = useContext(AllContext)
    return data;
}

export default useContextHook;