import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BaseForm } from '../BaseForm/BaseForm';
import GroupButtons from '../GroupButtons/GroupButtons';
import TextArea from '../TextArea/TextArea';
import {
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    Button
} from 'reactstrap'



function FormExam({handleSaveButton, handleSearchPatient, handleSearchDoctor}) {
  return (
    <BaseForm idForm="form-exam">
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
                        onChange={handleSearchPatient}>
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
                        placeholder="patient name"
                        disabled>
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
                        type="text" 
                        placeholder="doctor crm"
                        onChange={handleSearchDoctor}>
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
                        placeholder="doctor name"
                        disabled>
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
                    <TextArea 
                        idInput="description"
                        placeholder="description"
                    />
                </FormGroup>
            </Col>
            <GroupButtons>
                <Button  type="submit" className="btn-cancel btn-danger">
                    Cancel
                </Button>
                <Button type="button" className="btn-save btn-success" onClick={handleSaveButton}>
                    Save
                </Button>
            </GroupButtons>
        </Row>
        
    </BaseForm>
  );
}

export default FormExam;