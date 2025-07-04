import { useState } from "react";


export const Counter =()=>{
     
const [name,setName]=useState("");
const handleSubmit =(event)=>{
    event.preventDefault();
    console.log(name);

}
const handleChange =(e)=>{
    setName(e.target.value);
}

return(
    <section>
        <h1>Controlled Form</h1>
        <form>
            <label>
                name:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            
            <br/>
            <button onClick={handleSubmit}>submit</button>

        </form>
    </section>
)
}