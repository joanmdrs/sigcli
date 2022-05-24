import React from 'react';
import "./ListAppointment.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from 'reactstrap'
import { faPenToSquare , faTrash } from '@fortawesome/free-solid-svg-icons'
function ListAppointment({appointments}) {

    console.log(typeof(appointments))
  return (
    <Table responsive hover borderless className='table-list-appointments'>
        <thead>
            <tr>
                <th> ID </th>
                <th> title   </th>
                <th> patient </th>
                <th> doctor </th>
                <th> crm </th>
                <th> ações </th>
            </tr>
        </thead>
        <tbody>
            {
                appointments !== undefined ?                 
                    appointments.map((appointment) => {
                        return (
                            <tr>
                                <td>{appointment.id}</td>
                                <td>{appointment.title}</td>
                                <td>{appointment.patient_name}</td>
                                <td>{appointment.doctor_name}</td>
                                <td>{appointment.crm_doctor}</td>
                                <td className="td-with-btns">
                                    <Button className="btn-action btn-warning">
                                        <FontAwesomeIcon className="icon-menu" icon={faPenToSquare} /> 
                                    </Button>
                                    <Button className="btn-action btn-danger">
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

export default ListAppointment;