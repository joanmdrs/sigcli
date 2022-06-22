import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import Nav from '../../components/Nav/Nav';
import FormDoctor from "../../components/Forms/FormDoctor/FormDoctor";
import ListDoctor from "../../components/ListDoctor/ListDoctor";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container as ContainerDoctor} from "../../components/Container/Container";
import {Box as BoxDoctor} from "../../components/Box/Box";
import { Header as HeaderDoctor } from "../../components/Header/Header";
import { Search } from "../../components/Search/Search";
import {
    addDoctor,
    updateDoctor,
    deleteDoctor,
    getDoctors,
    getValuesInput,
    getActionForm,
    setFields,
    messageConfirm,
    messageFailure,
    getDoctorByCrm
} from "../../services/DoctorServices";
import api from "../../services/api";

function Doctor(){
    const [listDoctors, setListDoctors] = useState([]);

    const handleSaveButton = () => {
        const data = getValuesInput();
        const action = getActionForm();

        if(action === "add"){
            try {
                addDoctor(data);
                messageConfirm("New doctor added.");
            } catch(error) {
                messageFailure("Something went wrong.");
            }
        } else {
            try {
                updateDoctor(action, data);
                messageConfirm("The informations about this doctor were updated.")
            } catch(error){
                messageFailure("Something went wrong");
            }
        }
    }

    useEffect( () => {
        const fetchData = async () => {
            const data = await getDoctors();
            const doctors = JSON.parse(data);
            setListDoctors(doctors);
        }
        fetchData();
    }, []);

    const handleDelete = async (doctorId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#0C6170',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    deleteDoctor(doctorId);
                } catch(error) {
                    messageFailure("Something went wrong");
                } finally {
                    document.location.reload();
                }
            }
        })
    }

    const handleFilterByCrm = async () => {

        const crmProvided = document.getElementById("searchCrm").value;
       
        const data = await getDoctorByCrm(crmProvided);
        const doctor = JSON.parse(data);
        setListDoctors([doctor]);
    
    }

    const handlePrepareToUpdate = (DoctorId) => {
        let data = {}
        listDoctors.forEach(element => {
            if (element.id === DoctorId){
                data = element;
            }
        });
        setFields(data);
    }




    return (
        <ContainerDoctor>
            <Nav />
            <BoxDoctor>
                <HeaderDoctor
                    title="Doctor"
                    text="Doctor registration: Include, Search, Change, Delete and List" 
                    icon="stethoscope"/>
                <FormDoctor handleSaveButton={handleSaveButton} />
                <Search 
                    id="searchCrm"
                    title="Filter by CRM"
                    placeholder="crm"
                    handleSearch={handleFilterByCrm}
                />
                <ListDoctor doctors={listDoctors} setFields={handlePrepareToUpdate} handleDelete={handleDelete} />
            </BoxDoctor>
        </ContainerDoctor>
    );
};

export default Doctor;