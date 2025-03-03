import { useState } from "react"

export default function FormDetails (){

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')

    function handleSubmit(){
        alert(
            `username is ${name} & user eamil is ${email}`
        )
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Name</label><br></br>
            <input type="text" placeholder="enter the name" value={name} onChange={(e)=>setName(e.target.value)}></input><br></br>
            <label>Email</label><br></br>
            <input type="email" placeholder="enter the email address" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>
            <button type="submit">Submit</button>
        </form>
        
        {name}
        {email}
        </>
    )
}