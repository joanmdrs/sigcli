import React from "react";
import Home from "./pages/Home/Home"
import Exam from "./pages/Exam/Exam"
import Patient from "./pages/Patient/Patient"

import Recepcionist from "./pages/Recepcionist/Recepcionist"
import Doctor from "./pages/Doctor/Doctor"

import {BrowserRouter, Routes as Switch, Route } from "react-router-dom"

export default function Routes () {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/patient" element={<Patient />} />
                <Route path="/exams" element={<Exam />} />
                <Route path="/recepcionist" element={<Recepcionist />} />
                <Route path="/doctor" element={<Doctor />} />
            </Switch>
        </BrowserRouter>
    )
}