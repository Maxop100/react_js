import { useState } from "react";





export const DerivedState =()=>{
    const [users,setUsers]=useState(
        [
            {name:"alice",age:25},
            {name:"bob",age:30},
            {name:"charlie",age:35},
            {name:"angeles",age:45
        
        }]
    );
    return(
        <div className="main-div">
            <h1>User list</h1>
            <ul>
                {
                    users.map((currElem,index)=>{
                        return(
                            <>
                        <li key={index} classname="main-div">
                            {currElem.name} - {currElem.age} years old
                        </li>
                        </>
                        )
                    })
                }
            </ul>
        </div>
    );
};