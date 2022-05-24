import "./Appointment.css"
import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { Container as ContainerAppointment} from "../../components/Container/Container";
import {BoxAppointment} from "../../components/BoxAppointment/BoxAppointment";
import HeaderAppointment from "../../components/HeaderAppointment/HeaderAppointment";
import FormAppointment from "../../components/FormAppointment/FormAppointment";
import { addAppointment } from "../../services/AppointmentServices";
import ListAppointment from "../../components/ListAppointment/ListAppointment";

export default function Appointment(){

    const [values, setValues] = useState([]);


    // POST
    const handleSaveButton = () => {

        const appointment = {
            title: document.getElementById("title").value,
            patient_cpf: document.getElementById("patient-cpf").value,
            doctor_crm: document.getElementById("doctor-crm").value,
            description: document.getElementById("description").value
        };
       addAppointment(appointment);
    }



    return (
        <ContainerAppointment>
            <Nav />
            <BoxAppointment>
                <HeaderAppointment />
                <FormAppointment handleSaveButton={handleSaveButton} />
                <ListAppointment />
            </BoxAppointment>
        </ContainerAppointment>
    )
}