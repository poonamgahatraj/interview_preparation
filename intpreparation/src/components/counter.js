import { useState } from "react"

export default function Counter (){
const[count , setCount]=useState(0)
function handleDecrease(){
    setCount(count-1)
}

function handleIncrease(){
    setCount(count+1)
}

function handleReset(){
    setCount(0)
}


    return(
        <>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrease}>Increment</button>
        <button onClick={handleDecrease}>decrement</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}