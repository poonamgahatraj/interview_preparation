import { useState } from "react";

function useCounter(){

    const [count ,setCount]=useState()

    function Increase (){
        setCount(count+1)
    }

    function Decrease()
{
    setCount(count-1)
}

return {count,Increase,Decrease}
}

export default useCounter;