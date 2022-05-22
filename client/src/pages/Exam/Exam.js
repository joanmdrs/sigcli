import "./Exam.css"
import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { Container as ContainerExam} from "../../components/Container/Container";
import {BoxExam} from "../../components/BoxExam/BoxExam";
import HeaderExam from "../../components/HeaderExam/HeaderExam";
import FormExam from "../../components/FormExam/FormExam";
import { addExam } from "../../services/ExamServices";
import ListExam from "../../components/ListExam/ListExam";

export default function Exam(){

    const [values, setValues] = useState([]);


    // POST 
    const handleSaveButton = () => {

        const exam = {
            title: document.getElementById("title").value,
            patient_cpf: document.getElementById("patient-cpf").value,
            doctor_crm: document.getElementById("doctor-crm").value,
            description: document.getElementById("description").value
        };
       addExam(exam);
    }



    return (
        <ContainerExam>
            <Nav />
            <BoxExam>
                <HeaderExam />
                <FormExam handleSaveButton={handleSaveButton} />
                <ListExam />
            </BoxExam>
        </ContainerExam>
    )
}