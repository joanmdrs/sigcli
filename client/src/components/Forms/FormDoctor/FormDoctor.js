import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GroupButtons from '../GroupButtons/GroupButtons';
import { BaseForm } from '../BaseForm/BaseForm';
import {
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    Button
} from 'reactstrap';

function FormDoctor({handleSaveButton}) {
  return (
    <BaseForm idForm="form-doctor">
        <Row>
            <Col md={4}>
                <FormGroup>
                    <Label for="input-crm">CRM:</Label>
                    <Input id="input-crm" name="crm" maxLength={12} minLength={12} type="text" placeholder="Ex.: 0000-UF" className="input-crm-doctor" required></Input>
                </FormGroup>
            </Col>
            <Col md={8}>
                <FormGroup>
                    <Label for="input-name">Name:</Label>
                    <Input id="input-name" name="name" maxLength={255} type="text" placeholder="Name" className="input-name-doctor" required></Input>
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col md={4}>
                <FormGroup>
                    <Label for="input-phone">Phone:</Label>
                    <Input id="input-phone" name="phone" maxLength={14} type="text" placeholder="Phone" className="input-phone-doctor" required></Input>
                </FormGroup>
            </Col>
            <Col md={8}>
                <FormGroup>
                    <Label for="input-email">Email:</Label>
                    <Input id="input-email" name="email" maxLength={255} type="email" placeholder="Email" className="input-email-doctor" required></Input>
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                <FormGroup>
                    <Label for="input-username">Username:</Label>
                    <Input id="input-username" name="username" maxLength={50} type="text" placeholder="Username" className="input-username-doctor" required></Input>
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <Label for="input-password">Password:</Label>
                    <Input id="input-password" name="password" maxLength={50} type="password" placeholder="Password" className="input-password-doctor" required></Input>
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <GroupButtons>
                <Button type="reset" className="btn-cancel btn-danger">Cancel</Button>
                <Button type="button" className="btn-save btn-success" onClick={handleSaveButton}>Save</Button>
            </GroupButtons>
        </Row>
    </BaseForm>
  );
}

export default FormDoctor;