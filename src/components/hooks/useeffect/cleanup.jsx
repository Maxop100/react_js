import {useState,useEffect} from 'react';
export const CleanUp =()=>{
    const [count,setCount]=useState(602650);

    useEffect(()=>{
        const timer = setInterval(() => {
            setCount((prev)=>prev+1);
        }, 1000);

       return()=> clearInterval(timer);

    },[]);
    return(
        <div >
            <div >
                <p>MY Subscriber on yt</p>
                <div>{count}</div>
            </div>
            <h3>subscribers<br/>real time</h3>
        </div>
    );
};