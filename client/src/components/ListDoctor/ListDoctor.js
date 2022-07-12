import React from 'react';
import "./ListDoctor.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Table, Button } from 'reactstrap'
import { faPenToSquare , faTrash } from '@fortawesome/free-solid-svg-icons'

function ListDoctor({doctors, prepareToUpdate, removeDoctor }) {

    if(doctors.length !== 0){
        return (
            <Table responsive hover borderless className='table-list-doctors'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>CRM</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doctors.map((doctor, key) => {

                            return (
                                <tr key={key}>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.crm}</td>
                                    <td>{doctor.phone}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.username_fk}</td>

                                    <td className="td-with-btns">

                                        <Button className="btn-action btn-warning" onClick={() => {
                                            prepareToUpdate(doctor.crm);
                                        
                                        }}>
                                            <FontAwesomeIcon className="icon-menu" icon={faPenToSquare} /> 
                                        </Button>

                                        <Button className="btn-action btn-danger" onClick={() => {
                                           removeDoctor(doctor.crm);
                                            
                                        }}>
                                            <FontAwesomeIcon className="icon-menu" icon={faTrash} /> 
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        );
    } 

    return (
        <div className='div-no-doctors'>
            Não há médicos cadastrados
        </div>
    )
   
}


export default ListDoctor;