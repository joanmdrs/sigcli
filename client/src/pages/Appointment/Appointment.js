import "./Appointment.css"
import React from "react";
import Nav from "../../components/Nav/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faFileWaveform } from '@fortawesome/free-solid-svg-icons'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    Button
} from 'reactstrap'

export default function Appointment(){

    return (
        <div className="container-appointment">
            <Nav />
            <div className="box-appointment">

                <div className="box-header-appointment">
                    <div className="box-icon-and-title">
                        <FontAwesomeIcon className="icon" icon={faFileWaveform} /> 
                        <h3> Appointments </h3>
                    </div>
                    <div className="box-list-functions">
                        <p>
                            Appointment registration: Include, Search, Change, Delete and List
                        </p>
                    </div>
                </div>
                <Form className="form-appointment">
                    <Row>
                        <Col md={8}>
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
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="appointment-date">
                                        Date
                                </Label>
                                <Input 
                                    id="appointment-date"
                                    type="date" 
                                    placeholder="appointment date" >
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="patient-id">
                                    Patient id
                                </Label>
                                <Input 
                                    id="patient-id"
                                    type="number" 
                                    placeholder="patient id">
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
                                <Label for="doctor-id">
                                    Doctor id
                                </Label>
                                <Input 
                                    id="doctor-id"
                                    type="number" 
                                    placeholder="doctor id">
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
                    <Row >
                        <Col md={8}>
                            <FormGroup>
                                <Label for="appointment-description">
                                Description
                                </Label>
                                <Input 
                                    id="appointment-description"
                                    type="textarea" 
                                    placeholder="description"
                                    className="input-textarea" >
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col className="col-btn-save-cancel" md={4}>
                            <Button type="button" className="btn-save btn-success">
                                Save
                            </Button>
                            <Button  type="submit" className="btn-cancel btn-danger">
                                Cancel
                            </Button>
                        </Col>
                    </Row>

               </Form>
            </div>
        </div>
    )
} 