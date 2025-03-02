import { useEffect, useState } from "react";
import axios from "axios";


function useFetch(url){

    const[data,setData]=useState()
    const[isLoading,setIsLoading]=useState(true)
    const[isError,setIsError]=useState(null)

    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            setData(res.data)
            setIsLoading(false)
        })

        .catch((err)=>{
            setIsError(err)
            setIsLoading(false)
        })
    })
}