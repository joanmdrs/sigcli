import React from "react";
import {BrowserRouter, Routes as Rotas ,Route} from "react-router-dom";

import Home from "./pages/Home/Home";
import Appointment from "./pages/Appointment/Appointment";
import Patient from "./pages/Patient/Patient";
import Doctor from "./pages/Doctor/Doctor";
import Exam from "./pages/Exam/Exam";

export default function Routes(){
   return(
        <BrowserRouter>
           <Rotas>
            <Route path="/" element={<Home />} />
               <Route path="/appointment" element={<Appointment />} />
               <Route path="/patient" element={<Patient />} />
               <Route path="/doctor" element={<Doctor />} />
               <Route path="/exam" elements={<Exam />} />
           </Rotas>
        </BrowserRouter>
   )
}
