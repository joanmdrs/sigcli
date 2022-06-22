import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { Container as ContainerAppointment} from "../../components/Container/Container";
import {BoxAppointment} from "../../components/BoxAppointment/BoxAppointment";
import HeaderAppointment from "../../components/HeaderAppointment/HeaderAppointment";
import FormAppointment from "../../components/FormAppointment/FormAppointment";
import { addAppointment, deleteAppointment, getActionForm, getAppointments, getValuesInput, messageFailure, messagePrepareToUpdate, messageSucess, setFields, updateAppointment } from "../../services/AppointmentServices";
import ListAppointment from "../../components/ListAppointment/ListAppointment";
import { filterPatient } from "../../services/patientServices";
import { getDoctorByCrm } from "../../services/DoctorServices";

export default function Appointment(){

    const [listAppointments, setListAppointments] = useState([]);

    // POST OR UPDATE
    const handleSaveButton = () => {

        const data = getValuesInput();
        const action = getActionForm();

        if(action === "add"){
          addAppointment(data).then((response) => {
            messageSucess("New Appointment added");
          }).catch((error) => {
            console.log(error);
          });
            
              
        }else {

            updateAppointment(data).then((response) => {
                messageSucess("The informations about this appointment were updated.")
            }).catch((error) => {
                messageFailure(error);
            });
            
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

        let data = {};
        listAppointments.forEach(element => {
            element.id === AppointmentID ? data = element : data = {}
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


    const handleSearchPatient = async () => {
        const cpfReceived = document.getElementById("patient-cpf").value;

        try {
            const data = await filterPatient(cpfReceived);
            const patient = JSON.parse(data);
            document.getElementById("patient-name").value = patient.name;
            cpfReceived === "" 
            ? 
            document.getElementById("patient-name").value = "" 
            : 
            document.getElementById("patient-name").value = document.getElementById("patient-name").value;
        }catch(error) {
            document.getElementById("patient-name").value = "buscando ...";

        }
    }

    const handleSearchDoctor = async () => {
        const crmReceived = document.getElementById("doctor-crm").value;
        
        try {
            const data = await getDoctorByCrm(crmReceived);
            const doctor = JSON.parse(data);
            document.getElementById("doctor-name").value = doctor.name;
            crmReceived === "" 
            ? 
            document.getElementById("doctor-name").value = "" 
            : 
            document.getElementById("doctor-name").value = document.getElementById("doctor-name").value;
        }catch(error) {
            document.getElementById("doctor-name").value = "buscando ...";

        }
    }

    return (
        <ContainerAppointment>
            <Nav />
            <BoxAppointment>
                <HeaderAppointment />
                <FormAppointment 
                    handleSaveButton={handleSaveButton} 
                    handleSearchPatient={handleSearchPatient}
                    handleSearchDoctor={handleSearchDoctor}
                />
                <ListAppointment 
                    appointments={listAppointments} 
                    setFields={handlePreparaToUpdate} 
                    handleDelete={handleDelete} />
            </BoxAppointment>
        </ContainerAppointment>
    )
}