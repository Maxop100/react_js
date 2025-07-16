import {useContext} from "react";
import { BioContext } from ".";

export const Home = () => {
   const myName = useContext(BioContext);
   const myAge = 21;
    return(
    <>
      <h1>heloo Context Api.my name is {myName} and my age is {myAge} </h1>
    </>
    )
};
