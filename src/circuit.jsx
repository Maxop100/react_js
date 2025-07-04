import { useState } from 'react';
import  './circuit.css';
export const ShortCircuit = () =>{
    const [isloggedIn,setIsLoggedIn]=useState();
    const [user,setUser]=useState("");

    
    return(
        <>
        <section className="section">
        <h1>Welcome TO LOGIN Page</h1>
        {isloggedIn&&<p>you are logged in!</p>}
        {user?`hello ${user}`:" plz log in!"}
        <div>
            <button onClick={()=>setIsLoggedIn(!isloggedIn)}>toggle login state</button>
            <button onClick={()=>setUser("manish kumar")}>set user</button>
            <button onClick={()=>setUser("")}>clear user</button>

            
            
        </div>
        </section>
        </>
       
    )
}