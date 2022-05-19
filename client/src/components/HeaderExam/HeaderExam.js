import "./HeaderExam.css"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faFileWaveform } from '@fortawesome/free-solid-svg-icons'

// import { Container } from './styles';

function HeaderExam() {
  return (
    <div className="box-header-exam">
        <div className="box-icon-and-title">
            <FontAwesomeIcon className="icon" icon={faFileWaveform} /> 
            <h3> Exams </h3>
        </div>
        <div className="box-list-functions">
            <p>
                Exam registration: Include, Search, Change, Delete and List
            </p>
        </div>
    </div>
  )
}

export default HeaderExam;