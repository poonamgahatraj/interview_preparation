import React from "react";
import { useState } from "react";

export default function Interview (){
    const [bgclr,setBgclr]=useState("grey")

    function handleClick(){
        setBgclr("blue");
    }
    return(
        <>
        <div style={{backgroundColor:bgclr,height:"200px",width:"200px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <button onClick={handleClick}>Clickme</button>
        </div>
        </>
    )
}