function Profile(){
    return (
        <div>
            <h1>Profile card challenge</h1>
            <ProfileCard
            name="alice"
            age={25}
            greetings={
                <div>
                    <strong>hi alice,have a wonderful day</strong>
                    </div>
            
            }
            >
                <p>hobbies:reading,gaming</p>
                <button>contact</button>
            </ProfileCard>
            <ProfileCard
            name="bob"
            age={30}
            greetings={
                <div>
                    <strong>hi bob,have a wonderful day</strong>
                    </div>
            
            }
            >
                <p>hobbies:dancing,gaming</p>
                <button>contact</button>
            </ProfileCard>
        </div>
    );
}

export default Profile;

function ProfileCard(props){
    return (<>
    <h2>Name:{props.name}</h2>
    <p>age{props.age}</p>
    <p>{props.greetings}</p>
    <div>{props.children}</div>
    </>);

}