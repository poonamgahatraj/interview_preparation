import React from "react";
import { useState } from "react";

export default function Btnclk (){

    const[count,setCount]=useState(0);

    function handleCount(){
        setCount(count+1);
    }
    return(
        <>
        <h1>Button clicked {count} times</h1>
        <button onClick={handleCount}>Clickme</button>
        </>
    )
}