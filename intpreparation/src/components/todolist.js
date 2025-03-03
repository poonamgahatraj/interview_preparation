import { useState } from "react"


export default function Todo (){

    const [todo,setTodo]=useState([])
    const[newtodo,setNewtodo]=useState("")

    function handleTodos(){
        setTodo([...todo,newtodo])
    }

    function handleDelete (index){
const updatedtodos=[...todo]
updatedtodos.splice(index,1)
setTodo(updatedtodos);
    }
    return(
        <>
        <input type="text" value={newtodo} onChange={(e)=>setNewtodo(e.target.value)}></input>
        <button onClick={handleTodos}>Add todo</button>

        {
            todo.map((item,index)=>(
                <div style={{display:"flex"}}>
<li key={index}>{item}</li>
<button onClick={handleDelete}>Delete</button>
                </div>
                
            ))
        }
        </>
    )
}