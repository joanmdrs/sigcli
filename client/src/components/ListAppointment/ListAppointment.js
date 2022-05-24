import React from 'react';
import "./ListAppointment.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap'

// import { Container } from './styles';

function ListAppointment() {
  return (
    <Table responsive hover borderless className='table-list-appointments'>
        <thead>
            <tr>
                <th> ID </th>
                <th> title   </th>
                <th> patient </th>
                <th> doctor </th>
                <th> crm </th>
                <th> description </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> 1 </td>
                <td> Consulta 1 </td>
                <td> Paciente 1 </td>
                <td> Médico 1 </td>
                <td> CRM </td>
                <td> description 1</td>
            </tr>
            <tr>
                <td> 1 </td>
                <td> Consulta 1 </td>
                <td> Paciente 1 </td>
                <td> Médico 1 </td>
                <td> CRM </td>
                <td> description 1</td>
            </tr>
            <tr>
                <td> 1 </td>
                <td> Consulta 1 </td>
                <td> Paciente 1 </td>
                <td> Médico 1 </td>
                <td> CRM </td>
                <td> description 1</td>
            </tr>

        </tbody>
    </Table>

  );
}

export default ListAppointment;