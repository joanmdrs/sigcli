import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { Container as ContainerRecepcionist} from "../../components/Container/Container";
import { Box as BoxRecepcionist } from "../../components/Box/Box";
import { Header as HeaderRecepcionist} from "../../components/Header/Header"
import { FormRecepcionist } from "../../components/Forms /FormRecepcionist/FormRecepcionist";
import { addRecepcionist, getValuesInput, messageConfirm } from "../../services/RecepcionistServices";

export default function Recepcionist() {


    // POST 
    const handleSaveButton = () => {

      const data = getValuesInput();
      addRecepcionist(data);
      messageConfirm("New Recepcionist added.");
     
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
            <FormRecepcionist handleSaveButton={handleSaveButton} />
        </BoxRecepcionist> 
    </ContainerRecepcionist>
  )
}
