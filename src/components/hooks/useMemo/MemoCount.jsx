import {memo, useRef} from "react";


 const Counts =({bioData})=>{
    const renderCount = useRef(0);
    console.log(renderCount);


    return(
        <div>
            <p>nothing Changed here but i have now rendered:
                <span>{renderCount.current++}time(s)</span></p>
                <p>My name is {bioData.name} and my age is {bioData.age}</p>
        </div>
    );

};

export default memo (Counts);