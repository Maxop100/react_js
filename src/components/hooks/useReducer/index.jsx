import { useReducer } from "react";

export const ReducerComponent = () => {
    const initialState = { count: 0 };

    const Reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { count: state.count + 1 };
            case "decrement":
                return { count: state.count - 1 };
            case "reset":
                return initialState;
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <div className="p-4 bg-green-500 h-lvh flex flex-col justify-center items-center">
            <h1>hello usReducerHook</h1>
            <div>{state.count}</div>
            <button
                className="p-2 m-2 bg-white text-black"
                onClick={() => dispatch({ type: "increment" })}
            >
                Increment
            </button>
            <button
                className="p-2 m-2 bg-white text-black"
                onClick={() => dispatch({ type: "decrement" })}
            >
                Decrement
            </button>
            <button
                className="p-2 m-2 bg-white text-black"
                onClick={() => dispatch({ type: "reset" })}
            >
                Reset
            </button>
        </div>
    );
};
