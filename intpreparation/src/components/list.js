import { useState } from "react";

export default function ItemList(){
const[namelist,setNamelist]=useState(["asdf","qwert","sdfg","mnbv"])
const[newlist,setNewlist]=useState("")

function addItem (){
    setNamelist([...namelist,newlist])
    setNewlist("")
}
    return(

        <>
        <input type="text" placeholder="enter the new item "  value={newlist} onChange={(e)=>setNewlist(e.target.value)}></input>
        <button onClick={addItem}>Add to the list </button>
        {
            namelist.map((item)=>(
                <li>{item}</li>
            ))
        }
        </>
    )

}