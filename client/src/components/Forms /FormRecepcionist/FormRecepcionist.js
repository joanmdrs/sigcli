import React, { useRef } from 'react';
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
} from 'reactstrap'

export function FormRecepcionist({handleSaveButton}) {


    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);  
    return (

        <BaseForm idForm="form-recepcionist">
            <Row>
                <FormGroup>
                    <Label for="name">
                        Name
                    </Label>
                    <Input 
                        id="name" 
                        name="name" 
                        type="text" 
                        placeholder="name"
                        ref={nameRef}
                    ></Input>
                </FormGroup> 
            </Row>
            <Row>
                <Col md={4}>
                    <FormGroup>
                        <Label for="phone">
                            Phone
                        </Label>
                        <Input 
                            id="phone" 
                            name="phone" 
                            type="text" 
                            placeholder="phone"
                            ref={phoneRef}
                        ></Input>
                    </FormGroup>
                </Col>
                <Col md={8}>
                    <FormGroup>
                        <Label for="email">
                            Email
                        </Label>
                        <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="email"
                            ref={emailRef}
                        ></Input>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                <FormGroup>
                    <Label for="username">
                        Userame
                    </Label>
                    <Input 
                        id="username" 
                        name="username" 
                        type="text" 
                        placeholder="username" 
                        ref={usernameRef} 
                    ></Input>
                </FormGroup>
                </Col>
                <Col md={4}>
                <FormGroup>
                    <Label for="password">
                        Password
                    </Label>
                    <Input 
                        id="password" 
                        name="password" 
                        type="password" 
                        placeholder="password" 
                        ref={passwordRef} 
                    ></Input>
                </FormGroup>
                </Col>
            </Row>
            <Row>
                <GroupButtons md={12}>
                    <Button  type="submit" className="btn-cancel btn-danger">
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
