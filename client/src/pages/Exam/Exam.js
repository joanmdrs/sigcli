import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import Nav from "../../components/Nav/Nav";
import { Container as ContainerExam} from "../../components/Container/Container";
import { Box as BoxExam } from "../../components/Box/Box";
import { Header as HeaderExam} from "../../components/Header/Header"
import FormExam from "../../components/Forms/FormExam/FormExam";
import { addExam, deleteExam, getActionForm, getExams, getValuesInput, messageFailure, messagePrepareToUpdate, messageSucess, setFields, updateExam } from "../../services/ExamServices";
import ListExam from "../../components/ListExam/ListExam";
import { findDoctorByCrm } from "../../services/DoctorServices";
import { findPatientByCpf } from "../../services/patientServices";


export default function Exam(){


    const [listExams, setListExams] = useState([]);

    // POST OR UPDATE
    const handleSaveButton = () => {

        const data = getValuesInput();
        const action = getActionForm();

        if(action === "add"){
            try{
                addExam(data);
                messageSucess("New exam added.");
            }catch(error){
                messageFailure("Something went wrong.")
            }
        }else {
            try{
                updateExam(action, data);
                messageSucess("The informations about this exam were updated.")
            }catch(error){
                messageFailure("Something went wrong.")
            }  
        }
    }

    // LIST 
    // Após a renderização, retornar todos os exames 

    useEffect( () => {

        const fetchData = async () => {
            const data = await getExams();
            const exams = JSON.parse(data)
            setListExams(exams)
        }
    
        fetchData();
    }, []);
    
    // SETFIELDS  

    const handlePreparaToUpdate = async (ExamID) => {

        let data = {}
        listExams.forEach(element => {
            if(element.id === ExamID) data = element
        });

        const getPatient = await findPatientByCpf(data.patient_fk);
        const patient = JSON.parse(getPatient);



        const getDoctor = await findDoctorByCrm(data.doctor_fk);
        const doctor = JSON.parse(getDoctor);



        setFields(data, patient.name, doctor.name);
        
        messagePrepareToUpdate(
            "Edit Exam",
            "Now you will edit this Exam's informations, be careful."
        );
        
    }


    // DELETE 

    const handleDelete = (id) => {
        deleteExam(id);
    }

    const handleSearchPatient = async () => {
        const cpfReceived = document.getElementById("patient-cpf").value;

        try {
            const data = await findPatientByCpf(cpfReceived);
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
            const data = await findDoctorByCrm(crmReceived);
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
        <ContainerExam>
            <Nav />
            <BoxExam>
                <HeaderExam 
                    title="Exam" 
                    text="Exam registration: Include, Search, Change, Delete and List" 
                    icon="file-waveform"
                    
                ></HeaderExam>

                <FormExam 
                    handleSaveButton={handleSaveButton} 
                    handleSearchPatient={handleSearchPatient} 
                    handleSearchDoctor={handleSearchDoctor} />
                <ListExam 
                    exams={listExams} 
                    setFields={handlePreparaToUpdate} 
                    handleDelete={handleDelete} />
            </BoxExam>
        </ContainerExam>
    )
}