import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./BaseForm.css";
import { Form } from 'reactstrap'

export function BaseForm ({idForm, children}) {
    return (

        <Form className="form" data-action="add" id={idForm}>
             {children}
        </Form>
    
    )
}