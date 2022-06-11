import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import Nav from "../../components/Nav/Nav";
import { Container as ContainerAppointment} from "../../components/Container/Container";
import {BoxAppointment} from "../../components/BoxAppointment/BoxAppointment";
import HeaderAppointment from "../../components/HeaderAppointment/HeaderAppointment";
import FormAppointment from "../../components/FormAppointment/FormAppointment";
import { addAppointment, deleteAppointment, getActionForm, getAppointments, getValuesInput, messageFailure, messagePrepareToUpdate, messageSucess, setFields, updateAppointment } from "../../services/AppointmentServices";
import ListAppointment from "../../components/ListAppointment/ListAppointment";

export default function Appointment(){

    const [listAppointments, setListAppointments] = useState([]);

    // POST OR UPDATE
    const handleSaveButton = () => {

        const data = getValuesInput();
        const action = getActionForm();

        if(action === "add"){
            try {
                addAppointment(data);
                messageSucess("New Appointment added");
            } catch(error){
                messageFailure("Something went wrong.");
            }
              
        }else {
            try {
                updateAppointment(action, data);
                messageSucess("The informations about this appointment were updated.")
            } catch (error) {
                messageFailure("Something went wrong")
            }
        }
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

    // SETFIELDS  

    const handlePreparaToUpdate = (AppointmentID) => {

        let data = {}
        listAppointments.forEach(element => {
            element.id === AppointmentID ? data = element : data = data
        });

        setFields(data);
        
        messagePrepareToUpdate(
            "Edit Appointment",
            "Now you will edit this Appointment's informations, be careful."
        );

    }

    // DELETE 

    const handleDelete = (id) => {
        deleteAppointment(id);
    }


    return (
        <ContainerAppointment>
            <Nav />
            <BoxAppointment>
                <HeaderAppointment />
                <FormAppointment handleSaveButton={handleSaveButton} />
                <ListAppointment 
                    appointments={listAppointments} 
                    setFields={handlePreparaToUpdate} 
                    handleDelete={handleDelete} />
            </BoxAppointment>
        </ContainerAppointment>
    )
}