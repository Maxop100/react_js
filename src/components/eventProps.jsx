export const EventProps =()=>{

        const HandleWelcomeUser = (user)=>{
            alert(`hey,${user}`);
        }
        const handleHover = ()=>{
            alert(`hey thanks for hovering me`);
        }

    return(
        <>
        <WelcomeUser 
        onClick={()=>HandleWelcomeUser("manish")}
            onMouseEnter={handleHover}/>
        </>
    );
};

const WelcomeUser = (props)=>{
    const handleGreeting =()=>{
        console.log(`hey User,welcome`);
        props.onClick();
    }
    return(
        <>
        <button onClick={props.onClick}>click</button>
        <button onMouseEnter={props.onMouseEnter}>Hover</button>
        <button onClick={handleGreeting}>Greeting</button>
        </>
    );
};