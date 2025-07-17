import { use, useReducer} from "react";
export const ReducerComponent = ()=>{


const Reducer = (state,action)=>{
    console.log(state,action);
    if(action.type === "increment"){
        return state +1

    }else if(action.type === "decrement"){
        return state -1
    }
}  
    const [count,dispatch] = useReducer(Reducer,0);
    console.log(useReducer(Reducer,0));
    return( <>
    <div className="p-4 bg-green-500 h-lvh flex flex-col justify-center items-center">
    <h1 >hello usReducerHook</h1>
    <div>
        {count}

    </div>
    <button className="p-4 bg-green-500 h-lvh flex flex-col justify-center items-center" onClick={()=>dispatch({type:"increment"})}>
        Increment
    </button>
    <button className="p-4 bg-green-500 h-lvh flex flex-col justify-center items-center" onClick={()=>dispatch({type:"decrement"})}>
        Decrement
    </button>
    </div>
    </>
    );

}