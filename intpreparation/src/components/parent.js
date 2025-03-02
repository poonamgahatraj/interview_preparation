import Child from "../child";

export default function Name(){
    const name="vishu" ;
    return(
        <>
        <p>hello {name}</p>
        <Child lname={name}/>
        </>
    )
}