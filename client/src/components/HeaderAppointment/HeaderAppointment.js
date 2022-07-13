import "./HeaderAppointment.css"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faFileWaveform } from '@fortawesome/free-solid-svg-icons'

function HeaderAppointment() {
  return (
    <div className="box-header-appointment">
        <div className="box-icon-and-title">
            <FontAwesomeIcon className="icon" icon={faFileWaveform} /> 
            <h3> Appointments </h3>
        </div>
        <div className="box-list-functions">
            <p>
                Appointment registration: Include, Search, Change, Delete and List
            </p>
        </div>
    </div>
  )
}

export default HeaderAppointment; 