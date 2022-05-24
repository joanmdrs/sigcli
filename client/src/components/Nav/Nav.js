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
    faFileWaveform,
    faUserGear
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
                    Home
                </Link>
                <Link className="tag-link" to="/appointments" >
                    <FontAwesomeIcon className="icon-menu" icon={faCalendarCheck} />
                    Appointments
                </Link>
                <Link className="tag-link" to="/" >
                    <FontAwesomeIcon className="icon-menu" icon={faBed} /> 
                    Patients
                </Link>
                <Link className="tag-link" to="/" >
                    <FontAwesomeIcon className="icon-menu" icon={faStethoscope} />  
                    Doctors
                </Link>
                <Link className="tag-link" to="/exams" >
                   <FontAwesomeIcon className="icon-menu" icon={faFileWaveform} /> 
                   Exams
                </Link>

                <Link className="tag-link" to="/recepcionist" >
                   <FontAwesomeIcon className="icon-menu" icon={faUserGear} /> 
                   Recepcionist
                </Link>

            </nav>
        </aside>
    )
}