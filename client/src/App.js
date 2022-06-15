import "./App.css";
import React from "react";
import Routes from "./routes";
import { library } from '@fortawesome/fontawesome-svg-core'
import  { 
  faHeartPulse,
  faCalendarCheck,
  faHome,
  faHospitalUser,
  faStethoscope,
  faFileWaveform,
  faUserGear
} from '@fortawesome/free-solid-svg-icons'

export default function App() {
  return (
    <Routes>
      
    </Routes>
  )
}

library.add(faHeartPulse,faCalendarCheck,faHome,faHospitalUser,faStethoscope,faFileWaveform,faUserGear)
