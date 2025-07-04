export const ParentComponent =()=>{
    return(
        <section className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center item-center bg-gray-900 text-white`}>
    <h1> component A</h1>
    <ChildComponent data="react js" />
    </section>
);
};

const ChildComponent = (props)=>{
    return (
        <>
        <h1>hello , i am component B</h1>
        <GrandChildComponent data={props.data} />
        </>
    )
}

const GrandChildComponent = (props)=>{
    return (
        <>
        <h1>hello , i am component C</h1>
        <GrandGrandChildComponent data={props.data} />
        </>
    )
}

const GrandGrandChildComponent = (props)=>{
    return (
        <>
        <h1>hello , i love React js</h1>
        
        </>
    )
}