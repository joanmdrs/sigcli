import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container as ContainerRecepcionist } from '../../components/Container/Container';
import { Box as BoxRecepcionist } from '../../components/Box/Box';
import { Header as HeaderRecepcionist } from '../../components/Header/Header';
import { FormRecepcionist } from '../../components/Forms/FormRecepcionist/FormRecepcionist';
import ListRecepcionist from '../../components/ListRecepcionist/ListRecepcionist'
import { messageSucess, messageError, messageInfo, messageWarning } from "../../services/MessagesServices.js"
import { Search } from '../../components/Search/Search';

import { 
  createRecepcionist, 
  getAllRecepcionist, 
  getOneRecepcionist, 
  getValuesFormRecepcionist, 
  removeRecepcionist, 
  setFieldsFormRecepcionist, 
  updateRecepcionist 
} from '../../services/RecepcionistServices';

export default function Recepcionist() {

  const [listValues, setListValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const data = await getAllRecepcionist();
        const recepcionists = JSON.parse(data);

        setListValues(recepcionists);
          
      } catch (error) {
        setListValues([])
      }
      
    };

    fetchData();
  }, []);


  const handleClickButtonSave = () => {
    if (document.getElementById("form-recepcionist").dataset.action === "add") {
      handleCreateRecepcionist();
    } else {
      handleUpdateRecepcionist();
    }
  };

  const handleCreateRecepcionist = () => {

    const recepcionist = getValuesFormRecepcionist();

    createRecepcionist(recepcionist).then(() => {
      messageSucess(`New Recepcionist was added.`);

    }).catch(() => {

      messageError("Something went wrong.");
    });
    
  }

  const handlePreparaToUpdate = async (cpf) => {

    const data = await getOneRecepcionist(cpf);
    const recepcionist = JSON.parse(data);
    messageInfo("Now you will edit this Recepcionist's informations, be careful.");
    setFieldsFormRecepcionist(recepcionist);
    
  }

  const handleUpdateRecepcionist = async () => {

    const recepcionist = getValuesFormRecepcionist();
   
    const recepcionistUpdated = {
      id: Number(recepcionist.id),
      name: recepcionist.name,
      cpf: recepcionist.cpf,
      phone: recepcionist.phone,
      email: recepcionist.email
    };


    updateRecepcionist(recepcionistUpdated).then((response)=>{
      messageSucess(`${response.data.name} was updated.`)

    }).catch((error)=>{
      messageError("An error occurred on the server and the recepcionist could not be updated")
    })

    
  };

  const handleFilterRecepcionistByCpf = async ()  => {
    const cpfReceived = document.getElementById("searchCpf").value;
    const data = await getOneRecepcionist(cpfReceived)
    const recepcionist = JSON.parse(data);
    setListValues([recepcionist]);

  }


  const handleRemoveRecepcionist = async (cpf) => {
    const result = await messageWarning();

    if(result.isConfirmed === true) {
      removeRecepcionist(cpf).then(() => {
        messageSucess("Recepcionist successfully excluded")

      }).catch((error) => {
        console.log(error)
        messageError("Something went wrong.");

      });

    }
  }




  return (
    <ContainerRecepcionist>
        <Nav />
        <BoxRecepcionist>
            <HeaderRecepcionist
              title="Recepcionist" 
              text="Recepcionist registration: Include, Search, Change, Delete and List" 
              icon="user-gear"
            ></HeaderRecepcionist>

            <FormRecepcionist 
              handleSaveButton={handleClickButtonSave} 
            ></FormRecepcionist>

            <Search 
              id="searchCpf"
              title="Filter by CPF"
              placeholder="cpf"
              handleSearch={handleFilterRecepcionistByCpf}
            ></Search>
            <ListRecepcionist 
              recepcionists={listValues} 
              prepareToUpdate={handlePreparaToUpdate}
              removeRecepcionist={handleRemoveRecepcionist}
              
            ></ListRecepcionist>

        </BoxRecepcionist> 
    </ContainerRecepcionist>
  )
}
