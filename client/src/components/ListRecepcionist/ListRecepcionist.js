import React from 'react';
import "./ListRecepcionist.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from 'reactstrap'
import { faPenToSquare , faTrash } from '@fortawesome/free-solid-svg-icons'

function ListRecepcionist({recepcionists, prepareToUpdate, removeRecepcionist }) {

    if(recepcionists.length !== 0){
        return (
            <Table responsive hover borderless className='table-list-recepcionists'>
                <thead>
                    <tr>
                        <th> ID     </th>
                        <th> name   </th>
                        <th> cpf    </th>
                        <th> phone  </th>
                        <th> e-mail  </th>
                        <th> username </th>
                        <th> ações    </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recepcionists.map((recepcionist, key) => {

                            return (
                                <tr key={key}>
                                    <td>{recepcionist.id}</td>
                                    <td>{recepcionist.name}</td>
                                    <td>{recepcionist.cpf}</td>
                                    <td>{recepcionist.phone}</td>
                                    <td>{recepcionist.email}</td>
                                    <td>{recepcionist.username_fk}</td>

                                    <td className="td-with-btns">

                                        <Button className="btn-action btn-warning" onClick={() => {
                                            prepareToUpdate(recepcionist.cpf);
                                        
                                        }}>
                                            <FontAwesomeIcon className="icon-menu" icon={faPenToSquare} /> 
                                        </Button>

                                        <Button className="btn-action btn-danger" onClick={() => {
                                           removeRecepcionist(recepcionist.cpf);
                                            
                                        }}>
                                            <FontAwesomeIcon className="icon-menu" icon={faTrash} /> 
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        );
    } 

    return (
        <div className='div-no-recepcionists'>
            Não há recepcionistas cadastrados
        </div>
    )
   
}

export default ListRecepcionist;

