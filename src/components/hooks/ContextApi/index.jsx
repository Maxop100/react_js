import { createContext } from "react";


const BioContext = createContext();
 export const BioProvider = ({ children }) => {
  const myName="manish";

  return (
    <BioContext.Provider value={myName}>
      {children}
    </BioContext.Provider>
  );
};