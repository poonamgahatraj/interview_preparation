import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";


export default function Fetchdata(){
const [data,setData]=useState([])

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response=>{
        setData(response.data)
    })

    .catch((err)=>{
        console.log(err)
    })
})

return(
    <>
    <h1>todos list</h1>
    {
       data.map((item)=>(
        <li>{item.title}</li>
       ))
    }
    </>
)
    

}