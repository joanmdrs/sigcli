import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./GroupButtons.css";
import { Col } from 'reactstrap'

export default function GroupButtons ({children, md }) {
    return (
        <Col 
            className="col-buttons-save-and-cancel" 
            md={md} 
        >
            {children}
        </Col>
    )
}


