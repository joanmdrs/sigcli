import React from 'react';
import "./ListDoctor.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Table, Button } from 'reactstrap'
import { faPenToSquare , faTrash } from '@fortawesome/free-solid-svg-icons'
import { messagePrepareToUpdate } from '../../services/DoctorServices';

function ListDoctor({doctors, setFields, handleDelete}) {
    return (
        <Table responsive hover borderless className='table-list-doctors'>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">CRM</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Username</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    doctors !== undefined ?                 
                        doctors.map((doctor, key) => {
                            return (
                                <tr key={key}>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.crm}</td>
                                    <td>{doctor.phone}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.username}</td>
                                    <td className="td-with-btns">
                                        <Button className="btn-action btn-warning" onClick={() => {
                                            setFields(doctor.id);
                                            messagePrepareToUpdate();
                                        }}>
                                            <FontAwesomeIcon className="icon-menu" icon={faPenToSquare} /> 
                                        </Button>
                                        <Button className="btn-action btn-danger" onClick={() => {
                                            handleDelete(doctor.id);
                                        }}>
                                            <FontAwesomeIcon className="icon-menu" icon={faTrash} /> 
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                    : ""
                }
            </tbody>
        </Table>
    );
}

export default ListDoctor;