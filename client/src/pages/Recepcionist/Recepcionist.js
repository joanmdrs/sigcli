import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { Container as ContainerRecepcionist} from "../../components/Container/Container";
import { Box as BoxRecepcionist } from "../../components/Box/Box";
import { Header as HeaderRecepcionist} from "../../components/Header/Header"
import { FormRecepcionist } from "../../components/Forms/FormRecepcionist/FormRecepcionist";
import { addRecepcionist, deleteRecepcionist, getActionForm, getAllRecepcionist, getOneRecepcionist, getValuesInput, messageConfirm, messageConfirmDelete, setFields, updateRecepcionist } from "../../services/RecepcionistServices";
import { ListRecepcionist } from "../../components/Listing/ListRecepcionist/ListRecepcionist";
import Swal from 'sweetalert2';
import { Search } from "../../components/Search/Search";
import api from "../../services/api";

export default function Recepcionist() {

  const [listRecepcionist, setListRecepcionist] = useState([]);

  // POST and UPDATE
  const handleSaveButton = () => {

    const data = getValuesInput();
    const action = getActionForm();

    if(action === "add"){
        addRecepcionist(data);
        messageConfirm("New Recepcionist added.");
    }else {
        updateRecepcionist(action, data);
        messageConfirm("The informations about this recepcionist were updated.")
    }
    
  }

  // LIST 
  // Após a renderização, retornar todos os recepcionistas 

  useEffect( () => {

      const fetchData = async () => {
          const data = await getAllRecepcionist();
          const recepcionists = JSON.parse(data)
          setListRecepcionist(recepcionists)
      }
  
      fetchData();
  }, []);


  const handleFilterByCpf = async () => {

    const cpfProvided = document.getElementById("searchCpf").value;
   
    api.get(`/recepcionists/${cpfProvided}`).then((response) => {
      console.log(response.data);
      setListRecepcionist([response.data]);
    })



  }

  // SETFIELDS  

  const handlePreparaToUpdate = async (RecepcionistID) => {

    const allRecepcionists = await getAllRecepcionist();
    const data = JSON.parse(allRecepcionists);

    const verifyID = (value) => value == RecepcionistID;
    let recepcionist = data.filter((element) => (verifyID(element.id)));

    setFields(recepcionist[0]);

  }

  // DELETE 

  const handleDelete = (id) => {
    messageConfirmDelete(id);
  }



  return (
    <ContainerRecepcionist>
        <Nav />
        <BoxRecepcionist>
            <HeaderRecepcionist
              title="Recepcionist" 
              text="Recepcionist registration: Include, Search, Change, Delete and List" 
              icon="user-gear"
            />
            <FormRecepcionist 
              handleSaveButton={handleSaveButton} 
            />

            <Search 
              handleFilterByCpf={handleFilterByCpf}
            />
            <ListRecepcionist 
              recepcionists={listRecepcionist} 
              setFields={handlePreparaToUpdate}
              handleDelete={handleDelete}
              
            />

        </BoxRecepcionist> 
    </ContainerRecepcionist>
  )
}
