import { useRef } from 'react';
export const UseRef =()=>{

    const username=useRef(null);
    const password=useRef(null);

 console.log(username, password);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value, password.current.value);
    };
    return(
        <form onSubmit={handleFormSubmit} className="flex align-center justify-center flex-col gap-2">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" ref={username}/>
            <br/>
            <label htmlFor="password">Password:</label>
            <input type="password"id="password" ref={password} />
            <br/>
            <button>Submit</button>

        </form>
    )
};