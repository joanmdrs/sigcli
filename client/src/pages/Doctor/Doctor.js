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
    createDoctor,
    updateDoctor,
    removeDoctor,
    listAllDoctors,
    getValuesFormDoctor,
    getActionForm,
    setFieldsFormDoctor,
    findDoctorByCrm
} from "../../services/DoctorServices";
import {messageSucess, messageError, messageInfo, messageWarning} from "../../services/MessagesServices.js"


function Doctor(){

    
    const [listDoctors, setListDoctors] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
    
            try {
                const data = await listAllDoctors();
                const doctors = JSON.parse(data);
                setListDoctors(doctors);
                
            } catch (error) {
                setListDoctors([])
            }
          
        };
    
        fetchData();
    }, []);

    const handleClickButtonSave = () => {
        const action = getActionForm();

        if(action === "add"){
            handleCreateDoctor();
        } else {
            handleUpdateDoctor();
        }
    }

    const handleCreateDoctor = () => {
        const doctor = getValuesFormDoctor();

        createDoctor(doctor).then(() => {
        messageSucess(`New Doctor was added.`);

        }).catch(() => {
            messageError("Something went wrong.");
        });
    }

    const handlePrepareToUpdate = async (doctorCrm) => {

        const data = await findDoctorByCrm(doctorCrm);
        const doctor = JSON.parse(data);
        messageInfo("Now you will edit this Doctor's informations, be careful.");
        setFieldsFormDoctor(doctor);
        
    }

    const handleUpdateDoctor = async () => {

        const doctor = getValuesFormDoctor();
       
        const doctorUpdated = {
          id: Number(doctor.id),
          name: doctor.name,
          crm: doctor.crm,
          phone: doctor.phone,
          email: doctor.email
        };
    
    
        updateDoctor(doctorUpdated).then((response)=>{
          messageSucess(`${response.data.name} was updated.`)
    
        }).catch((error)=>{
          messageError("An error occurred on the server and the doctor could not be updated")
        })
    
        
    };

    const handleFilterDoctorByCrm = async () => {

        const crmProvided = document.getElementById("searchCrm").value;
       
        const data = await findDoctorByCrm(crmProvided);
        const doctor = JSON.parse(data);
        setListDoctors([doctor]);
    
    }

    const handleRemoveDoctor = async (crm) => {
        const result = await messageWarning();
        
        if(result.isConfirmed === true) {
          removeDoctor(crm).then(() => {
            messageSucess("Doctor successfully excluded")
    
          }).catch((error) => {
            messageError("Deu merda");
          });
    
        }
      }
    

    




    return (
        <ContainerDoctor>
            <Nav />
            <BoxDoctor>
                <HeaderDoctor
                    title="Doctor"
                    text="Doctor registration: Include, Search, Change, Delete and List" 
                    icon="stethoscope"/>
                <FormDoctor handleSaveButton={handleClickButtonSave} />
                <Search 
                    id="searchCrm"
                    title="Filter by CRM"
                    placeholder="crm"
                    handleSearch={handleFilterDoctorByCrm}
                />
                <ListDoctor 
                    doctors={listDoctors} 
                    prepareToUpdate={handlePrepareToUpdate} 
                    removeDoctor={handleRemoveDoctor}
                ></ListDoctor>
            </BoxDoctor>
        </ContainerDoctor>
    );
}

export default Doctor;