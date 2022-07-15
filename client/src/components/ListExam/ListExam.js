import React from 'react';
import "./ListExam.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from 'reactstrap'
import { faPenToSquare , faTrash } from '@fortawesome/free-solid-svg-icons'
import { messagePrepareToUpdate } from '../../services/ExamServices';
function ListExam({exams, setFields, handleDelete}) {

    return (
        <Table responsive hover borderless className='table-list-exams'>
            <thead>
                <tr>
                    <th> ID </th>
                    <th> title   </th>
                    <th> patient cpf </th>
                    <th> doctor crm </th>
                    <th> ações </th>
                </tr>
            </thead>
            <tbody>
                {
                    exams !== undefined ?                 
                        exams.map((exam, key) => {
                            return (
                                <tr key={key}>
                                    <td>{exam.id}</td>
                                    <td>{exam.title}</td>
                                    <td>{exam.patient_fk}</td>
                                    <td>{exam.doctor_fk}</td>
                                    <td className="td-with-btns">

                                        <Button className="btn-action btn-warning" onClick={() => {
                                            setFields(exam.id);
                                            messagePrepareToUpdate();
                                        
                                        }}>
                                            <FontAwesomeIcon className="icon-menu" icon={faPenToSquare} /> 
                                        </Button>

                                        <Button className="btn-action btn-danger" onClick={() => {
                                            handleDelete(exam.id);
                                            
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

export default ListExam;