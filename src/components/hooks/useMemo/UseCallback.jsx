import { useState,memo, useCallback } from "react";

const Button = memo(({ onClick, children }) => {
  console.log(`Button rendered:${children}`);
  return (
    <button className={`p-2 m-2 bg-white text-black ${children=== "Increment" ? "bg-green-500" : "bg-red-500"}`} onClick={onClick}>
      {children}
    </button>
  );
});


export default function UseCallback() {
    const [count, setCount] = useState(0);
    
   



    const increment = useCallback(() => {
        console.log("Incrementing count");
        setCount((prevCount) => prevCount + 1);
    }, []);

    const decrement = useCallback(() => {
        console.log("Decrementing count");
        setCount((prevCount) => prevCount - 1);
    }, []);

    
    return (
        <div className="p-4 bg-blue-500 h-lvh flex flex-col justify-center items-center">
        <h1>{count}</h1>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        </div>
    );
    }