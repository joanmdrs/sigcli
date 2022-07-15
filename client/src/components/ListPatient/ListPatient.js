import React from 'react';
import "./ListPatient.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from 'reactstrap'
import { faPenToSquare , faTrash } from '@fortawesome/free-solid-svg-icons'

function ListPatient({patients, prepareToUpdate, removePatient }) {

    if(patients.length !== 0){
        return (
            <Table responsive hover borderless className='table-list-patients'>
                <thead>
                    <tr>
                        <th> ID     </th>
                        <th> name   </th>
                        <th> cpf    </th>
                        <th> phone  </th>
                        <th> e-mail  </th>
                        <th> username </th>
                        <th> ações    </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patients.map((patient, key) => {

                            return (
                                <tr key={key}>
                                    <td>{patient.id}</td>
                                    <td>{patient.name}</td>
                                    <td>{patient.cpf}</td>
                                    <td>{patient.phone}</td>
                                    <td>{patient.email}</td>
                                    <td>{patient.username_fk}</td>

                                    <td className="td-with-btns">

                                        <Button className="btn-action btn-warning" onClick={() => {
                                            prepareToUpdate(patient.cpf);
                                        
                                        }}>
                                            <FontAwesomeIcon className="icon-menu" icon={faPenToSquare} /> 
                                        </Button>

                                        <Button className="btn-action btn-danger" onClick={() => {
                                           removePatient(patient.cpf);
                                            
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
        <div className='div-no-patients'>
            Não há pacientes cadastrados
        </div>
    )
   
}

export default ListPatient;

