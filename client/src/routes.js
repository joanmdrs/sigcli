import React from "react";
import Home from "./pages/Home/Home"
import Exam from "./pages/Exam/Exam"
import Patient from "./pages/Patient/Patient"
import Appointment from "./pages/Appointment/Appointment"
import Recepcionist from "./pages/Recepcionist/Recepcionist"
import Doctor from "./pages/Doctor/Doctor"
import {BrowserRouter, Routes as Switch, Route } from "react-router-dom"
import Login from "./pages/Login/Login";
import Diagnosis from "./pages/Diagnosis/Diagnosis";

export default function Routes () {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/patients" element={<Patient />} />
                <Route path="/exams" element={<Exam />} />
                <Route path="/appointments" element={<Appointment />} />
                <Route path="/recepcionists" element={<Recepcionist />} />
                <Route path="/doctors" element={<Doctor />} />
                <Route path="/diagnoses/:appointment_id" element={<Diagnosis />} />
            </Switch>
        </BrowserRouter>
    )
}