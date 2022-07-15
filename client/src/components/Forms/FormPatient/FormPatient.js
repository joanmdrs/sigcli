import 'bootstrap/dist/css/bootstrap.min.css';
import { BaseForm } from '../BaseForm/BaseForm';
import GroupButtons from '../GroupButtons/GroupButtons';
import {
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    Button
} from 'reactstrap';
import React, { useRef } from 'react';


function FormPatient ({handleSaveButton}) {

  const nameRef = useRef(null);
  const cpfRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleCancelButton = () => {
    nameRef.current.value = '';
    cpfRef.current.value = '';
    phoneRef.current.value = '';
    emailRef.current.value = '';
    usernameRef.current.value = '';
    passwordRef.current.value = '';

    window.location.reload();
  };
    return (
        <BaseForm idForm="form-patient">
            <Row>

                   <Col md={8}>
                    <FormGroup>
                            <Label for="name">Name</Label>
                            <Input id="name" name="name" type="text" placeholder="name" ref={nameRef} ></Input>
                        </FormGroup>
                   </Col>
                
                </Row>
                <Row>
                    <Col md={4}>
                    <FormGroup>
                        <Label for="cpf">CPF</Label>
                        <Input id="cpf" name="cpf" type="text" placeholder="cpf" ref={cpfRef} ></Input>
                    </FormGroup>
                    </Col>
                    <Col md={4}>
                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input id="phone" name="phone" type="text" placeholder="phone" ref={phoneRef} ></Input>
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="email" ref={emailRef} ></Input>
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input id="username" name="username" type="text" placeholder="username" ref={usernameRef} ></Input>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input id="password" name="password" type="password" placeholder="password" ref={passwordRef} ></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <GroupButtons>
                        <Button type="submit" className="btn-cancel btn-danger" onClick={handleCancelButton}>
                            Cancel
                        </Button>
                        <Button type="button" className="btn-save btn-success" onClick={handleSaveButton}>
                            Save
                        </Button>
                    </GroupButtons>
                </Row>
        </BaseForm>
    )
}

export default FormPatient;