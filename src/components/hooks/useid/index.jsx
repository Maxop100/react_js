import { useId } from 'react';

export const UseId = () =>{
    const usernameId = useId();
    const emailId = useId();

    const  handleInputSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get('name');
        const email = formData.get('email');
        console.log(`Username: ${username}, Email: ${email}`);

    }

    return(
        <form onSubmit={handleInputSubmit}>
            <div>
                <label htmlFor={usernameId} >Username:</label>
                <input type="text" id={usernameId} name="name" />
            </div>
            <div>
                <label htmlFor={emailId} >Email:</label>
                <input type="email" id={emailId} name="email" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};