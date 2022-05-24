import React from "react";
import Swal from 'sweetalert2';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare , faTrash } from '@fortawesome/free-solid-svg-icons';
import { handleDeleteButton } from "../../pages/Patient/Patient"; 
import './Table.css'

export default function TableCard(props){
    return <tr>
        <th scope="row">{props.id}</th>
        <td>{props.name}</td>
        <td>{props.username}</td>
        <td>{props.cpf}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td className="td-with-btns">
            <Button className="btn-action btn-warning" onClick={() => {
                Swal.fire({
                    title: 'Edit Patient',
                    text: "Now you will edit this Patient's informations, be careful.",
                    icon: 'info',
                    showCancelButton: false,
                    confirmButtonColor: '#0C6170',
                    confirmButtonText: 'Ok',
                });
                document.getElementById("id").defaultValue = props.id;
                document.getElementById("name").defaultValue = props.name;
                document.getElementById("cpf").defaultValue = props.cpf;
                document.getElementById("phone").defaultValue = props.phone;
                document.getElementById("email").defaultValue = props.email;
                document.getElementById("username").defaultValue = props.username;
                document.getElementById("password").defaultValue = props.password;
                document.getElementById("form-patient").dataset.action = "edit"
            }}>
                <FontAwesomeIcon className="icon-menu" icon={faPenToSquare} /> 
            </Button>
            <Button className="btn-action btn-danger" onClick={() => handleDeleteButton(props.id)}>
                <FontAwesomeIcon className="icon-menu" icon={faTrash} />
            </Button>
        </td>
    </tr>
}