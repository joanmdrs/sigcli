import "./Exam.css"
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

export default function Exam(){

    return (
        <div className="container-exam">
            <Nav />
            <div className="box-exam">
            
                <div className="box-header-exam">
                    <div className="box-icon-and-title">
                        <FontAwesomeIcon className="icon" icon={faFileWaveform} /> 
                        <h3> Exams </h3>
                    </div>
                    <div className="box-list-functions">
                        <p>
                            Exam registration: Include, Search, Change, Delete and List
                        </p>
                    </div>
                </div>
                <Form className="form-exam">
            
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
                                    placeholder="patient cpf">
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
                                    Doctor CRM
                                </Label>
                                <Input 
                                    id="doctor-crm"
                                    type="number" 
                                    placeholder="doctor crm">
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
                            <Button  type="submit" className="btn-cancel btn-danger">
                                Cancel
                            </Button>
                            <Button type="button" className="btn-save btn-success">
                                Save
                            </Button>
                        </Col>
                    </Row>
                    
               </Form>
            </div>
        </div>
    )
}