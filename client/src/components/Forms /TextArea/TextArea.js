import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TextArea.css";
import { Input } from 'reactstrap'

export default function TextArea ({idInput, placeholder}) {
    return (
        <Input 
            id={idInput}
            type="textarea" 
            placeholder={placeholder}
            className="input-textarea" >
        </Input>
    )
}