import { useState } from "react";
export const LoginForm =()=>{

    const[user,setUser]=useState({
        username:"",
        password:""
    })
  const HandleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
    }

    const handleChangeInput =(e)=>{
        const {name,value}=e.target;
        setUser((prev)=>({...prev,[name]:value}));

    }
    return(
        <div>
            <div>
                <h1>LoginForm</h1>
                <form onSubmit={HandleFormSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text"  name="username" required autoComplete="off" value={user.username} onChange={handleChangeInput }/>

                    <label htmlFor="password">password</label>
                    <input type="password" name="password" required  autoComplete="off"  value={user.password} onChange={handleChangeInput} />
                  <button type="submit">login</button>
                </form>

            </div>
        </div>
    );
};