import Counts from "./MemoCount.jsx";


import { useState,useMemo } from "react";


export const ReactMemo = ()=>{
    const[count, setCount] = useState(0);

  

  const myBioData =  useMemo(()=>{
   return {
        name:"manish kumar",
        age:21
    };

},[])

    return(
        <>
        <div className="p-4 bg-blue-500 h-lvh flex flex-col justify-center items-center">
            <h1>{count}</h1>
            <button className="p-2 m-2 bg-white text-black" onClick={()=>setCount(count+1)}>Increment</button>
            <Counts bioData={myBioData}/>
        </div>
        </>
    )
}