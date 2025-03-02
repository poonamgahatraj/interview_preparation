import { useState } from "react"


export default function Login (){

    const [email,setEmail]=useState("")
    const[password,setPassword]=useState('')

    function handlesubmit(e){
        e.preventDefault();
        console.log (email,password)
    }


    return(
        <>
        <form onSubmit={handlesubmit}>
<label>Email</label><br></br>
<input type="email" value={email} onChange={e=>setEmail(e.target.value)}></input>
<label>Password</label><br></br>
<input type="password" value={password} onChange={e=>setPassword(e.target.value)}></input>
<button type="submit">Login</button>
        </form>
        </>
    )
}