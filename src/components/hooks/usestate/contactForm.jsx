import { useState } from "react";

export const ContactForm=()=>{

    const [user,setUser]=useState({
        username:"",
        email:"",
        message:""
    })

 const handleChange=(e)=>{
    const {name,value}=e.target;
    setUser((prev)=>({...prev,[name]:value}));
 }

    const maxop=(e)=>{
        e.preventDefault();
        console.log(user);
    }
    return(
        <>
        <div style={{height:"70%",width:"70%",display:"flex",alignItems:"center",alignContent:"center"}}>
            <div>
                <h1>Conatct Form</h1>
                <form style={{display:"flex",flexDirection:"column",gap:"10px"}} onSubmit={maxop}>
                    <label htmlFor="username">useranme</label>
                    <input type="text" name="username" required autoComplete="off" value={user.username} onChange={handleChange}  />

                    <label htmlFor="email">email</label>
                    <input type="email" name="email" required autoComplete="off" value={user.email} onChange={handleChange}  />


                    <label htmlFor="message">message</label>
                    <textarea type="password" name="message" required autoComplete="off" rows="6" value={user.message} onChange={handleChange}  />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}