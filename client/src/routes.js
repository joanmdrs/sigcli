import React from "react";
import Home from "./pages/Home/Home"
import Exam from "./pages/Exam/Exam"
import Recepcionist from "./pages/Recepcionist/Recepcionist"

import {BrowserRouter, Routes as Switch, Route } from "react-router-dom"

export default function Routes () {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/exams" element={<Exam />} />
                <Route path="/recepcionist" element={<Recepcionist />} />
            </Switch>
        </BrowserRouter>
    )
}