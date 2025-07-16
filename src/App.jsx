
//import NetflixSeries from "./components/netflexseries";
//import "./components/netflix.module.css";

//import { Todo } from "./project/todo/todo";
//import { ToggleSwitch } from "./project/toggleswitch/toggleswitch";
//import { ShortCircuit } from "./circuit";
//import { Counter } from "./components/hooks/usestate/index.jsx";
import { DarkLight, ThemeProvider } from "./components/hooks/ContextApi/DarkLight.jsx";
import { Home } from "./components/hooks/ContextApi/home.jsx";
import { BioProvider } from "./components/hooks/ContextApi/index.jsx";
import { UseRef } from "./components/hooks/useRef/index.jsx";



//import { DerivedState } from "./components/derivedstate";
//import { State } from "./components/hooks/state";
//import { LiftingState } from "./components/liftStateUp";
//import { EventProps } from "./components/eventProps";

export const App = ()=>{

  return (
    <>
    <ThemeProvider>
      <DarkLight/>
    </ThemeProvider>

    </>
  );   
};




