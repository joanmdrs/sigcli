import './Nav.css'
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 
{
    faHeartPulse,
    faCalendarCheck,
    faHome,
    faHospitalUser,
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
                <Link className="tag-link" to="/" >
                    <FontAwesomeIcon className="icon-menu" icon={faCalendarCheck} />
                    Appoitments
                </Link>
                <Link className="tag-link" to="/patient" >
                    <FontAwesomeIcon className="icon-menu" icon={faHospitalUser} /> 
                    Patients
                </Link>
                <Link className="tag-link" to="/doctor" >
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