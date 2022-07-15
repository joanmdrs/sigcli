import "./Header.css"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Header = ({title, text, icon}) => {
  return (
    <div className="box-header">
        <div className="box-icon-and-title">
            <FontAwesomeIcon className="icon" icon={icon} /> 
            <h3> {title} </h3>
        </div>
        <div className="box-list-functions">
            <p>
                {text}
            </p>
        </div>
    </div>
  )
}