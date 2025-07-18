import {useState,useMemo} from 'react';


const ExpensiveComponent = () => {
    const sum =()=>{
        console.log("calculating sum...");
        let i = 0;
        for(i=0;i<1000000000;i++){
            i=i+1;
        }
        return i;

    }
    const total = useMemo(()=>sum(),[])




   

    return <p>sum:{total}</p>;
};


const MemoParentComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>Memoization Example</div>
            
            <ExpensiveComponent />
            <button onClick={() => setCount(count + 1)}>
                Increment Count: {count}
            </button>
            <p>Parent Re-render:{count}</p>
        </div>
    );
};


export default MemoParentComponent;