import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { State } from './components/hooks/state.jsx'
//import { DerivedState } from './components/derivedstate.jsx'
import { LiftingState } from './components/liftStateUp.jsx'
import { ApiFetch } from './components/hooks/useeffect/apifetch.jsx'
import { UseId } from './components/hooks/useid/index.jsx'
//import { ContactForm } from './components/hooks/usestate/contactForm.jsx'
import { ParentComponent } from './components/propdrilling.jsx'
//import Profile from './components/profile.jsx'
//import { EventProps } from './components/eventProps.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<Registration/>
    <Profile/>*/}
   {/*<EventProps/>*/}
   {/*<State/>
   <DerivedState/>
   <LiftingState/>
   <ShortCircuit/>
   <ContactForm/>*/}
   <App/>
   
 
  </StrictMode>,
)
