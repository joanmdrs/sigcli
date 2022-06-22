import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FormAppointment.css";

import {
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    Button
} from 'reactstrap'


function FormAppointment({handleSaveButton, handleSearchPatient, handleSearchDoctor}) {
  return (
    <Form className="form-appointment" data-action='add' id='form-appointment'>
        <FormGroup>
            <Label for="title">
                Title
            </Label>
            <Input 
                id="title"
                type="text" 
                placeholder="title">
            </Input>
        </FormGroup>

        <Row>
            <Col md={2}>
                <FormGroup>
                    <Label for="patient-cpf">
                        Patient CPF
                    </Label>
                    <Input 
                        id="patient-cpf"
                        type="text" 
                        placeholder="patient cpf"
                        onChange={handleSearchPatient}
                    >
                    </Input>
                </FormGroup>
            </Col>
            <Col md={10}>
                <FormGroup>
                    <Label for="patient-name">
                        Patient name
                    </Label>
                    <Input
                        id="patient-name"
                        type="text" 
                        placeholder="patient name">
                    </Input>
                </FormGroup>
            </Col>
        </Row>

        <Row>
            <Col md={2}>
                <FormGroup>
                    <Label for="doctor-crm">
                        Doctor CRM
                    </Label>
                    <Input 
                        id="doctor-crm"
                        type="number" 
                        placeholder="doctor crm"
                        onChange={handleSearchDoctor}
                    >
                    </Input>
                </FormGroup>
            </Col>
            <Col md={10}>
                <FormGroup>
                    <Label for="doctor-name">
                        Doctor name
                    </Label>
                    <Input
                        id="doctor-name"
                        type="text" 
                        placeholder="doctor name">
                    </Input>
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col md={4}>
                <FormGroup>
                    <Label for="data">
                        Date of Appointment
                    </Label>
                    <Input 
                        id="data-appointment"
                        type="date"
                        placeholder="data appointment">
                    </Input>
                </FormGroup>

            </Col>
            <Col md={4}>
                <FormGroup>
                    <Label for="data">
                        Hour of Appointment
                    </Label>
                    <Input 
                        id="hour-appointment"
                        type="time"
                        placeholder="hour appointment">
                    </Input>
                </FormGroup>

            </Col>
        </Row>
       
        <Row >
            <Col md={8}>
                <FormGroup>
                    <Label for="description">
                    Description
                    </Label>
                    <Input 
                        id="description"
                        type="textarea" 
                        placeholder="description"
                        className="input-textarea" >
                    </Input>
                </FormGroup>
            </Col>
            <Col className="col-btn-save-cancel" md={4}>
                <Button  type="submit" className="btn-cancel btn-danger">
                    Cancel
                </Button>
                <Button type="button" className="btn-save btn-success" onClick={handleSaveButton}>
                    Save
                </Button>
            </Col>
        </Row>

    </Form>
  );
}

export default FormAppointment;