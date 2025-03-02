import React from "react";
import { useState } from "react";


export default function Validform(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    function handleEmail(e){
       
        setEmail(e.target.value)
    }

    function handlepassword(e){
      
        setPassword(e.target.value)
    }

    function handleLogin(){
        if(email===''||password===''){
            alert("please fill all the form")
        }

       else{
        alert("form submitted successfully")
       }
       
    }
    return(
        <>
        <form>
            <label>Email</label>
            <input type="text" placeholder="enter the email address" value={email} onChange={handleEmail}></input><br></br>
            <label>Password</label>
            <input type="password" placeholder="enter the password" value={password} onChange={handlepassword}></input><br></br>
            <button onClick={handleLogin}>Login</button>

        </form>
        </>
    )
}

