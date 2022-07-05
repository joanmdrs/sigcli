import './Patient.css';
import React, { useState, useRef, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospitalUser, faPenToSquare , faTrash } from '@fortawesome/free-solid-svg-icons';
import { Form, FormGroup, Label, Input, Row, Col, Button, Table, InputGroup } from 'reactstrap';
import { createPatient, editPatient, removePatient, listPatients, filterPatient, messageSucess, messageFailure } from '../../services/patientServices.js'
import TableCard from "../../components/Table/Table.js";
import Swal from 'sweetalert2';
import Listpatient from '../../components/ListPatient/ListPatient';
import ListPatient from '../../components/ListPatient/ListPatient';


export default function Patient() {

  const [values, setValues] = useState();
  const [listValues, setListValues] = useState([]);
  const [searchValue, setSearchValue] = useState([]);




  const idRef = useRef(null);
  const nameRef = useRef(null);
  const cpfRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleSaveButton = () => {
    createPatient(values).then((patient)=>{
      messageSucess(`New Patient was added.`)
    }).catch((error)=>{
      console.log("Caiu aqui", error)
      messageFailure("Something went wrong.");
    });
    
    
  }

  const handleClickButton = () => {
    if (document.getElementById("form-patient").dataset.action === "new") {
      handleSaveButton();
    } else {
      handleUpdateButton();
    }
  };

  const handleUpdateButton = async () => {
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const cpf = document.getElementById("cpf").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const patientUpdated = {
      id: Number(id),
      name: name,
      cpf: cpf,
      phone: phone,
      email: email,
      username: username,
      password: password,
    };
    editPatient(patientUpdated).then((response)=>{
      messageSucess(`${response.data.name} was updated.`)
    }).catch((error)=>{
      console.log(error)
       Swal.fire({
         title: "Edit Patient",
         text: "Something was wrong.",
         icon: "info",
         showCancelButton: false,
         confirmButtonColor: "#0C6170",
         confirmButtonText: "Ok",
       });
    })

    
  };

  const handleCancelButton = () => {
    idRef.current.value = '';
    nameRef.current.value = '';
    cpfRef.current.value = '';
    phoneRef.current.value = '';
    emailRef.current.value = '';
    usernameRef.current.value = '';
    passwordRef.current.value = '';
  };

  const handleFilterPatientByCpf = async ()  => {
    const cpfReceived = document.getElementById("searchCpf").value;
    const data = await filterPatient(cpfReceived);
    const patient = JSON.parse(data);
    setListValues([patient]);

  }


  useEffect(() => {
    const fetchData = async () => {
      const data = await listPatients();
      const patients = JSON.parse(data);
      setListValues(patients);
    };

    fetchData();
  }, []);

  console.log(listValues)

  return (
    <div className="container-patient">
      <Nav />
      <div className="box-patient">
        <div className="box-header-patient">
          <div className="box-icon-and-title">
            <FontAwesomeIcon className="icon" icon={faHospitalUser} />
            <h3> Patients </h3>
          </div>
          <div className="box-list-functions">
            <p>
              Patient registration: Include, Search, Change, Delete and List
            </p>
          </div>
        </div>
        <Form className="form-patient" id="form-patient" data-action="new">
          <Row>
            <Col md={8}>
              <FormGroup className='idForm'>
                <Label for="id">Id</Label>
                <Input id="id" type="text" placeholder="id" ref={idRef} onChange={handleChangeValues}></Input>
              </FormGroup>

              <FormGroup>
                <Label for="name">Name</Label>
                <Input id="name" name="name" type="text" placeholder="name" ref={nameRef} onChange={handleChangeValues}></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="cpf">CPF</Label>
                <Input id="cpf" name="cpf" type="text" placeholder="cpf" ref={cpfRef} onChange={handleChangeValues}></Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input id="phone" name="phone" type="text" placeholder="phone" ref={phoneRef} onChange={handleChangeValues}></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="email" ref={emailRef} onChange={handleChangeValues}></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="username">Userame</Label>
                <Input id="username" name="username" type="text" placeholder="username" ref={usernameRef} onChange={handleChangeValues}></Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input id="password" name="password" type="password" placeholder="password" ref={passwordRef} onChange={handleChangeValues}></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col className="col-btn-save-cancel" md={12}>
              <Button 
              type="button" 
              onClick={() => {
                handleClickButton();
              }} 
              className="btn-save btn-success">
                  Save
              </Button>
              <Button 
              type="submit" 
              className="btn-cancel btn-danger"
              onClick={handleCancelButton}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>

        <div className="input-search-patient">
          <Label for="searchCpf">Filter By CPF</Label>
          <InputGroup>
            <Input id="searchCpf" type="text" placeholder="cpf"></Input> 
            <Button 
            color="success" 
            onClick={() => {
              handleFilterPatientByCpf();
            }}>
              Search
            </Button>
          </InputGroup>
        </div>
        <ListPatient
          patients={listValues}

        >

        </ListPatient>
        

      </div>
    </div>
  )
}

export const handleDeleteButton = async (id) => {
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
      removePatient(id);
      document.location.reload();
    }
  })
};
