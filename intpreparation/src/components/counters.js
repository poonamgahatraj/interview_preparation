import { useContext } from "react"
import { counterContext } from "./context/counterContext"

export default function Counters(){

    const data=useContext(counterContext)
    return(
        <>
        <button onClick={()=>data.setCount(data.count+1)}>Increment </button>

        <button onClick={()=>data.setCount(data.count-1)}>Decrement</button>
        </>
    )
}