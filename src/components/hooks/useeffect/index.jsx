import { useState,useEffect } from 'react'
export const Challenge =()=>{
    const [count,setCount]=useState(0);
    const [name,setName]=useState("");

    const Change=()=>{
        setCount(count+1);
    }

    const maxop=()=>{
        setName(name);
    }

    useEffect(()=>{
       document.title=`count: ${count}`
    },[count]);

    useEffect(()=>{
        console.log(name);
    },[name]);
    
    return(
        <>
        <div style={{height:"70%",width:"70%",display:"flex",flexDirection:"column",gap:"10px"}}>
        <h1>
            USEEffect Challenge
        </h1>
        <span>{count}</span>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <p>name:{name}</p>
        <input type="text" name={name} value={name} required onChange={(e)=>setName(e.target.value)} />
        </div>
        </>
    )
}