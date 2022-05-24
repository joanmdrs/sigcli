import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { Container as ContainerAppointment} from "../../components/Container/Container";
import {BoxAppointment} from "../../components/BoxAppointment/BoxAppointment";
import HeaderAppointment from "../../components/HeaderAppointment/HeaderAppointment";
import FormAppointment from "../../components/FormAppointment/FormAppointment";
import { addAppointment, getAppointments } from "../../services/AppointmentServices";
import ListAppointment from "../../components/ListAppointment/ListAppointment";

export default function Appointment(){

    const [listAppointments, setListAppointments] = useState([]);

    // POST
    const handleSaveButton = () => {

        const appointment = {
            title: document.getElementById("title").value,
            patient_cpf: document.getElementById("patient-cpf").value,
            patient_name: document.getElementById("patient-name").value,
            doctor_crm: document.getElementById("doctor-crm").value,
            doctor_name: document.getElementById("doctor-name").value,
            description: document.getElementById("description").value
        };
        
        console.log(appointment);
       addAppointment(appointment);
    }

    // LIST 
    // Retornar todos as consultas após renderização.  

    useEffect( () => {

        const fetchData = async () => {
            const data = await getAppointments();
            const appointments = JSON.parse(data)
            setListAppointments(appointments)
        }

        fetchData();
    }, []);




    return (
        <ContainerAppointment>
            <Nav />
            <BoxAppointment>
                <HeaderAppointment />
                <FormAppointment handleSaveButton={handleSaveButton} />
                <ListAppointment appointments={listAppointments} />
            </BoxAppointment>
        </ContainerAppointment>
    )
}