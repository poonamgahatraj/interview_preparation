import { useState } from "react"

export default function CounterComp (){

    const [count,setCount]=useState(0)

    function handleDecrease (){
        if(count>0){
            setCount(count-1)
        }
    }
    return(
        <>
        {count}
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={handleDecrease }>Decrease</button>
        </>
    )
}