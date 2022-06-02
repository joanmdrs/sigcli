import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { Container as ContainerRecepcionist} from "../../components/Container/Container";
import { Box as BoxRecepcionist } from "../../components/Box/Box";
import { Header as HeaderRecepcionist} from "../../components/Header/Header"
import { FormRecepcionist } from "../../components/Forms /FormRecepcionist/FormRecepcionist";
import { addRecepcionist, getAllRecepcionist, getValuesInput, messageConfirm } from "../../services/RecepcionistServices";
import { ListRecepcionist } from "../../components/Listing/ListRecepcionist/ListRecepcionist";
export default function Recepcionist() {

  const [listRecepcionist, setListRecepcionist] = useState([]);

  // POST 
  const handleSaveButton = () => {

    const data = getValuesInput();
    addRecepcionist(data);
    messageConfirm("New Recepcionist added.");
    
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

  return (
    <ContainerRecepcionist>
        <Nav />
        <BoxRecepcionist>
            <HeaderRecepcionist
              title="Recepcionist" 
              text="Recepcionist registration: Include, Search, Change, Delete and List" 
              icon="user-gear"
            ></HeaderRecepcionist>
            <FormRecepcionist handleSaveButton={handleSaveButton} />
            <ListRecepcionist recepcionists={listRecepcionist}/>
        </BoxRecepcionist> 
    </ContainerRecepcionist>
  )
}
