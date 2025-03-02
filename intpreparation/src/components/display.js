import axios from "axios"
import { useState,useEffect } from "react"

export default function Display (){

    const [data,setData]=useState([])
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>(
            
            setData(res.data),
            setLoading(false)
        ))
        .catch((err)=>{
            console.log("error", err)
        })
    })
    return(
        <>
        {loading &&
 <h1>loading.....</h1>
        }
       
        {
            data.map((item)=>(
                <li>{item.username}</li>
            ))
        }
        
        </>
    )
}