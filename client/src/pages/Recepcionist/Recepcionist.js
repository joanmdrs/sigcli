import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { Container as ContainerRecepcionist} from "../../components/Container/Container";
import { Box as BoxRecepcionist } from "../../components/Box/Box";
import { Header as HeaderRecepcionist} from "../../components/Header/Header"
import { FormRecepcionist } from "../../components/Forms /FormRecepcionist/FormRecepcionist";
import { addRecepcionist, deleteRecepcionist, getActionForm, getAllRecepcionist, getOneRecepcionist, getValuesInput, messageConfirm, setFields, updateRecepcionist } from "../../services/RecepcionistServices";
import { ListRecepcionist } from "../../components/Listing/ListRecepcionist/ListRecepcionist";
import Swal from 'sweetalert2';
import { Search } from "../../components/Search/Search";

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

    const searchCpf = document.getElementById("searchCpf").value;
    let recepcionist = {} ;
    const all = await getAllRecepcionist();
    const data = JSON.parse(all);

    data.forEach(element => {
      element.cpf === searchCpf ? recepcionist = element : recepcionist = {}
    });

    const one = await getOneRecepcionist(recepcionist.id)
    recepcionist = JSON.parse(one);
  }


  // SETFIELDS  

  const handlePreparaToUpdate = (RecepcionistID) => {

    let data = {}
    listRecepcionist.forEach(element => {
        element.id === RecepcionistID ? data = element : data = data
    });

    setFields(data);

  }

  // DELETE 

  const handleDelete = (id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#0C6170',
        confirmButtonText: 'Yes, delete it!'
     }).then((result) => {
        if (result.isConfirmed) {
           deleteRecepcionist(id);
           document.location.reload();
        }
     })
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
