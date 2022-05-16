import './Nav.css'
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 
{
    faHeartPulse,
    faCalendarCheck,
    faHome,
    faBed,
    faStethoscope,
    faFileWaveform
 } from '@fortawesome/free-solid-svg-icons'

export default function Nav(){
    return (
        <aside>
            <h1>
                SIGCLI
                <FontAwesomeIcon className="icon-menu" icon={faHeartPulse} /> 
            </h1>
            
            <nav>
                <Link className="tag-link" to="/" >
                    <FontAwesomeIcon className="icon-menu" icon={faHome} /> 
                    <p> Home </p>
                </Link>
                <Link className="tag-link" to="/" >
                    <FontAwesomeIcon className="icon-menu" icon={faCalendarCheck} />
                    <p> Appoitments </p>
                </Link>
                <Link className="tag-link" to="/" >
                    <FontAwesomeIcon className="icon-menu" icon={faBed} /> 
                    <p> Patients </p>
                </Link>
                <Link className="tag-link" to="/" >
                    <FontAwesomeIcon className="icon-menu" icon={faStethoscope} />  
                    <p> Doctors </p>
                </Link>
                <Link className="tag-link" to="/" >
                   <FontAwesomeIcon className="icon-menu" icon={faFileWaveform} /> 
                   <p> Exams </p>
                </Link>

            </nav>
        </aside>
    )
}