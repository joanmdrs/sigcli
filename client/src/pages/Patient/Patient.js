import './Patient.css';
import React, { useState, useRef, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

import { 
  createPatient,
  listPatients, 
  findPatientByCpf, 
  updatePatient, 
  removePatient, 
  getValuesFormPatient, 
  setFieldsFormPatient 
} from '../../services/patientServices.js'

import { Container as ContainerPatient } from '../../components/Container/Container';
import { Box as BoxPatient } from '../../components/Box/Box';
import { Header as HeaderPatient } from '../../components/Header/Header';
import ListPatient from '../../components/ListPatient/ListPatient';
import {messageSucess, messageError, messageInfo, messageWarning} from "../../services/MessagesServices.js"
import FormPatient from '../../components/Forms/FormPatient/FormPatient';
import { Search } from '../../components/Search/Search';

export default function Patient() {

  const [listValues, setListValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const data = await listPatients();
        const patients = JSON.parse(data);

        setListValues(patients);
          
      } catch (error) {
        setListValues([])
      }
      
    };

    fetchData();
  }, []);


  const handleClickButtonSave = () => {
    if (document.getElementById("form-patient").dataset.action === "add") {
      handleCreatePatient();
    } else {
      handleUpdatePatient();
    }
  };


  const handleCreatePatient = () => {

    const patient = getValuesFormPatient();

    createPatient(patient).then(() => {
      messageSucess(`New Patient was added.`);

    }).catch(() => {

      messageError("Something went wrong.");
    });
    
    
  }

  const handlePreparaToUpdate = async (patientCpf) => {

    const data = await findPatientByCpf(patientCpf);
    const patient = JSON.parse(data);
    messageInfo("Now you will edit this Patient's informations, be careful.");
    setFieldsFormPatient(patient);
    
  }

  const handleUpdatePatient = async () => {

    const patient = getValuesFormPatient();
   
    const patientUpdated = {
      id: Number(patient.id),
      name: patient.name,
      cpf: patient.cpf,
      phone: patient.phone,
      email: patient.email
    };


    updatePatient(patientUpdated).then((response)=>{
      messageSucess(`${response.data.name} was updated.`)

    }).catch((error)=>{
      messageError("An error occurred on the server and the patient could not be updated")
    })

    
  };


  const handleFilterPatientByCpf = async ()  => {
    const cpfReceived = document.getElementById("searchCpf").value;
    const data = await findPatientByCpf(cpfReceived)
    const patient = JSON.parse(data);
    setListValues([patient]);

  }


  const handleRemovePatient = async (cpf) => {
    const result = await messageWarning();

    if(result.isConfirmed === true) {
      removePatient(cpf).then(() => {
        messageSucess("Patient successfully excluded")

      }).catch((error) => {
        console.log(error)
        messageError("Deu merda");
      });

    }
  }


  return (

    <ContainerPatient>
      <Nav />
      <BoxPatient>
          <HeaderPatient 
              title="Patient" 
              text="Patient registration: Include, Search, Change, Delete and List"
              icon="hospital-user"
          ></HeaderPatient>

          <FormPatient 
            handleSaveButton={handleClickButtonSave} 
      
          > </FormPatient>
    
          <Search 
              id="searchCpf"
              title="Filter by Cpf"
              placeholder="cpf"
              handleSearch={handleFilterPatientByCpf}
          ></Search>
          <ListPatient
            patients={listValues}
            prepareToUpdate={handlePreparaToUpdate}
            removePatient={handleRemovePatient} >

          </ListPatient>
      </BoxPatient>

    </ContainerPatient>



        
  
  )
}

