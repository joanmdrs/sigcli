import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { Container as ContainerExam} from "../../components/Container/Container";
import {BoxExam} from "../../components/BoxExam/BoxExam";
import HeaderExam from "../../components/HeaderExam/HeaderExam";
import FormExam from "../../components/FormExam/FormExam";
import { addExam, getExams } from "../../services/ExamServices";
import ListExam from "../../components/ListExam/ListExam";

export default function Exam(){

    const [listExams, setListExams] = useState([]);

    // POST 
    const handleSaveButton = () => {

        const exam = {
            title: document.getElementById("title").value,
            patient_cpf: document.getElementById("patient-cpf").value,
            patient_name: document.getElementById("patient-name").value,
            doctor_crm: document.getElementById("doctor-crm").value,
            doctor_name: document.getElementById("doctor-name").value,
            description: document.getElementById("description").value
        };

        console.log(exam);
       addExam(exam);
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
    
  


    return (
        <ContainerExam>
            <Nav />
            <BoxExam>
                <HeaderExam />
                <FormExam handleSaveButton={handleSaveButton} />
               <ListExam exams={listExams} />
            </BoxExam>
        </ContainerExam>
    )
}