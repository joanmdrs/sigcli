import React from 'react';
import "./ListRecepcionist.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from 'reactstrap'
import { faPenToSquare , faTrash } from '@fortawesome/free-solid-svg-icons'
import { messagePrepareToUpdate } from '../../../services/RecepcionistServices';


export function ListRecepcionist({recepcionists, setFields, handleDelete}) {

    return (
        <Table responsive hover borderless className='table-list-recepcionists'>
            <thead>
                <tr>
                    <th> ID </th>
                    <th> name   </th>
                    <th> cpf </th>
                    <th> phone </th>
                    <th> email </th>
                    <th> username </th>
                    <th> ações </th>
                </tr>
            </thead>
            <tbody>
                {
                    recepcionists !== undefined ?                 
                        recepcionists.map((recepcionist, key) => {
                            return (
                                <tr key={key}>
                                    <td>{recepcionist.id}</td>
                                    <td>{recepcionist.name}</td>
                                    <td>{recepcionist.cpf}</td>
                                    <td>{recepcionist.phone}</td>
                                    <td>{recepcionist.email}</td>
                                    <td>{recepcionist.username}</td>
                                    <td className="td-with-btns">

                                        <Button className="btn-action btn-warning" onClick={() => {
                                            setFields(recepcionist.id);
                                            messagePrepareToUpdate();
                                        
                                        }}>
                                            <FontAwesomeIcon className="icon-menu" icon={faPenToSquare} /> 
                                        </Button>

                                        <Button className="btn-action btn-danger" onClick={() => {
                                            handleDelete(recepcionist.id);
                                            
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
