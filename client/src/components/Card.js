import React from "react";
import "./card.css";
import { handleDeleteButton } from "../pages/Recepcionist/Recepcionist";

export default function Card(props){
    return <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.username}</td>
        <td>
            <button className="card-button" onClick={() => {
                document.getElementById("input-id").defaultValue = props.id;
                document.getElementById("input-name").defaultValue = props.name;
                document.getElementById("input-username").defaultValue = props.username;
                document.getElementById("input-password").defaultValue = props.password;
                document.getElementById("form-recepcionist").dataset.action = "edit"
            }}>Edit</button>
            <button className="card-button" onClick={() => handleDeleteButton(props.id)}>Del</button>
        </td>
    </tr>
}