import { useState } from "react";

export const State =()=>{
    //let value =0;
     //const handleButtonclick=()=>{
       // value++;
        const [count,setCount] =useState(0);
        console.log("parent component rendered");
        const handleClick = ()=>{
           setCount(()=> count+1)

           
        };
        console.log(count);
     
    return(
        <>
        <div className="main-div">
        <h1>{count}</h1>
        <button onClick={handleClick}>Increment</button>

        </div>
        <Childcomp/>
        </>
    )

};

function Childcomp(){
    console.log("child component rendered");
    return<div>child comPonent</div>;

}