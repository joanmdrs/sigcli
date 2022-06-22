import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { Container as ContainerExam} from "../../components/Container/Container";
import { Box as BoxExam } from "../../components/Box/Box";
import { Header as HeaderExam} from "../../components/Header/Header"
import FormExam from "../../components/Forms/FormExam/FormExam";
import { addExam, deleteExam, getActionForm, getExams, getValuesInput, messageFailure, messagePrepareToUpdate, messageSucess, setFields, updateExam } from "../../services/ExamServices";
import ListExam from "../../components/ListExam/ListExam";
import Swal from 'sweetalert2';

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

    const handlePreparaToUpdate = (ExamID) => {

        let data = {}
        listExams.forEach(element => {
            element.id === ExamID ? data = element : data = data
        });

        setFields(data);
    
    }

    messagePrepareToUpdate(
        "Edit Exam",
        "Now you will edit this Exam's informations, be careful."
    );

    // DELETE 

    const handleDelete = (id) => {
        deleteExam(id);
    }


    return (
        <ContainerExam>
            <Nav />
            <BoxExam>
                <HeaderExam 
                    title="Exam" 
                    text="Exam registration: Include, Search, Change, Delete and List" 
                    
                ></HeaderExam>

                <FormExam handleSaveButton={handleSaveButton} />
                <ListExam 
                    exam={listExams} 
                    setFields={handlePreparaToUpdate} 
                    handleDelete={handleDelete} />
            </BoxExam>
        </ContainerExam>
    )
}