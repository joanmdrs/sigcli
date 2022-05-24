import React from "react";
import Home from "./pages/Home/Home"
import Recepcionist from "./pages/Recepcionist/Recepcionist"
import Doctor from "./pages/Doctor/Doctor"

import {BrowserRouter, Routes as Switch, Route } from "react-router-dom"

export default function Routes () {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/recepcionist" element={<Recepcionist />} />
                <Route path="/doctor" element={<Doctor />} />
            </Switch>
        </BrowserRouter>
    )
}