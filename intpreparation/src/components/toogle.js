import { useState } from "react"

export default function Toogle (){
const[visible,setVisible]=useState(true)

function handlevisibility(){
    setVisible(!visible)
}
    return(
        <>
           <button onClick={handlevisibility}>{visible? "show":"hide"}</button>
           {visible &&
 <p>qwer rtyyy sddkjgfk ndvkffj skddkfj</p>
           }
          
        
        </>
    )
}