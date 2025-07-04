import { useState } from "react";
export const Registration = () => {
    const [user,setUser]=useState({
        Name:"",
        email:"",
        password:"",
        number:"",
    });


    const handleFormSubmit=(event)=>{
        event.preventDefault();
        
        console.log(user);

    }

    const HandleInputChange=(e)=>{

        const{name,value}=e.target;
        setUser((prev)=>({...prev,[name]:value}));
  
    }

    return (
      <>
       <span style={{display:"flex",alignItems:"center",justifyContent:"center"}}>hello my name is {user.Name},my email is {user.email} ,my phone number is{user.number}</span>
        <div
          style={{
            height: '70%',
            width: '70%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'crimson',
            margin: '50px',
            border: 'black 2px solid',
            padding: '5px',
            overflow: 'hidden',
          }}
        >


           
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px', 
            }} onSubmit={handleFormSubmit}
          >
            <label>
              Name:
              <input type="text" placeholder="enter your name" required name="Name" value={user.Name} onChange={HandleInputChange} />
            </label>
  
            <label>
              Email:
              <input type="email" placeholder="enter your email" required name="email" value={user.email} onChange={HandleInputChange}  />
            </label>
  
            <label>
              Password:
              <input type="password" placeholder="enter your password" required name="password" value={user.password} onChange={HandleInputChange}  />
            </label>
  
            <label>
              Number:
              <input type="tel" placeholder="enter your number" required name="number" value={user.number}  onChange={HandleInputChange} />
            </label>
            <button type="submit">submit</button>
          </form>
        </div>
      </>
    );
  };
  