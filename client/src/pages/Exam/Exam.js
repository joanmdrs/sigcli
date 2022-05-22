import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { Container as ContainerExam} from "../../components/Container/Container";
import {BoxExam} from "../../components/BoxExam/BoxExam";
import HeaderExam from "../../components/HeaderExam/HeaderExam";
import FormExam from "../../components/FormExam/FormExam";
import { addExam, getActionForm, getExams, getValuesInput, setFields, updateExam } from "../../services/ExamServices";
import ListExam from "../../components/ListExam/ListExam";

export default function Exam(){

    const [listExams, setListExams] = useState([]);

    // POST 
    const handleSaveButton = () => {

        const data = getValuesInput();

        const action = getActionForm();

        action === "add" ? addExam(data) : updateExam(action, data);


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

    const handlePreparaToUpdate = (ExamID) => {

        let data = {}
        listExams.forEach(element => {
            element.id === ExamID ? data = element : data = data
        });

        setFields(data);
    
    }


    return (
        <ContainerExam>
            <Nav />
            <BoxExam>
                <HeaderExam />
                <FormExam handleSaveButton={handleSaveButton} />
               <ListExam exams={listExams} setFields={handlePreparaToUpdate} />
            </BoxExam>
        </ContainerExam>
    )
}