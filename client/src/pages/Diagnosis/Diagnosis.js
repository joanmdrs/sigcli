import { useParams } from "react-router";
import { useState } from "react";
import Nav from "../../components/Nav/Nav";
import { Container } from "../../components/Container/Container";
import { Box } from "../../components/Box/Box";
import { Header } from "../../components/Header/Header";
import FormDiagnosis from "../../components/Forms/FormDiagnosis/FormDiagnosis";
export default function Diagnosis(){
    const handleSaveButton = () => {}
    return (
      <Container>
        <Nav />
        <Box>
          <Header
            title="Diagnosis"
            text="Diagnosis About some Appointment"
            icon="file-waveform"
          ></Header>
          <FormDiagnosis handleSaveButton={handleSaveButton} />
          
        </Box>
      </Container>
    );	
}