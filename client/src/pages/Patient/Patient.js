import './Patient.css';
import React, { useState, useLayoutEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';
import { Form, FormGroup, Label, Input, Row, Col, Button, Table, InputGroup } from 'reactstrap';
import { createPatient, listPatients, editPatient, removePatient } from '../../services/patientServices.js'
import TableCard from "../../components/Table/Table.js";
import api from '../../services/api';


export default function Patient() {

  const [values, setValues] = useState();
  const [listValues, setListValues] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleSaveButton = () => {
    createPatient(values);
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

    editPatient({id: id, name: name, cpf: cpf, phone: phone, email: email, username: username, password: password})
  };

  useLayoutEffect(() => {
    api.get("/patient/getAll").then((response) => {
      setListValues(response.data);
    })
  }, [])

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
        <Form className="form-patient" id="form-patient"data-action="new">
          <Row>
            <Col md={8}>
              <FormGroup className='idForm'>
                <Label for="id">Id</Label>
                <Input id="id" type="text" placeholder="id" onChange={handleChangeValues}></Input>
              </FormGroup>

              <FormGroup>
                <Label for="name">Name</Label>
                <Input id="name" name="name" type="text" placeholder="name" onChange={handleChangeValues}></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="cpf">CPF</Label>
                <Input id="cpf" name="cpf" type="text" placeholder="cpf" onChange={handleChangeValues}></Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input id="phone" name="phone" type="text" placeholder="phone" onChange={handleChangeValues}></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="email" onChange={handleChangeValues}></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="username">Userame</Label>
                <Input id="username" name="username" type="text" placeholder="username" onChange={handleChangeValues}></Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input id="password" name="password" type="text" placeholder="password" onChange={handleChangeValues}></Input>
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
              <Button type="submit" className="btn-cancel btn-danger">
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>

        <div className="input-search-patient">
          <Label for="searchCpf">Filter By CPF</Label>
          <InputGroup>
            <Input id="searchCpf" type="text" placeholder="cpf"></Input> 
            <Button color="success">
              Search
            </Button>
          </InputGroup>
        </div>
        

        <Table responsive hover borderless className='tablePatient'>
          <thead>
            <tr>
              <th>
                Id
              </th>
              <th>
                Name
              </th>
              <th>
                Username
              </th>
              <th>
                CPF
              </th>
              <th>
                Phone
              </th>
              <th>
                Email
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
          {typeof listValues !== "undefined" && listValues.map((value) => {
            return <TableCard 
            key={value.id} 
            listCard={listValues} 
            setListCard={setListValues} 
            id={value.id} 
            name={value.name} 
            cpf={value.cpf} 
            phone={value.phone} 
            email={value.email} 
            username={value.username} 
            password={value.password}></TableCard>
          })}
          </tbody>
        </Table>

      </div>
    </div>
  )
}

export const handleDeleteButton = async (id) => {
  removePatient(id);
};
