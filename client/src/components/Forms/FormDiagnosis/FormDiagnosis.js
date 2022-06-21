import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseForm } from "../BaseForm/BaseForm";
import GroupButtons from "../GroupButtons/GroupButtons";
import TextArea from "../TextArea/TextArea";
import { FormGroup, Label, Input, Row, Col, Button } from "reactstrap";

function FormDiagnosis({ handleSaveButton }) {
  return (
    <BaseForm idForm="form-diagnosis">
      <FormGroup>
        <Label for="illness">Problem</Label>
        <Input id="illness" type="text" placeholder="Problem"></Input>
      </FormGroup>

      <Row>
        <Col md={5}>
          <FormGroup>
            <Label for="patient_cpf">Patient CPF</Label>
            <Input
              id="patient_cpf"
              type="text"
              placeholder="patient cpf"
            ></Input>
          </FormGroup>
        </Col>
        <Col md={5}>
          <FormGroup>
            <Label for="patient_crm">Doctor CRM</Label>
            <Input
              id="patient_crm"
              type="text"
              placeholder="Doctor CRM"
            ></Input>
          </FormGroup>
        </Col>
        <Col md={5}>
          <FormGroup>
            <Label for="appointment_id">Appointment</Label>
            <Input
              id="appointment_id"
              type="text"
              placeholder="Appointment ID"
            ></Input>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={80}>
          <FormGroup>
            <Label for="description">Description</Label>
            <TextArea idInput="description" placeholder="description" />
          </FormGroup>
        </Col>
        <GroupButtons>
          <Button type="submit" className="btn-info btn-info">
            Update
          </Button>
          <Button type="submit" className="btn-cancel btn-danger">
            Cancel
          </Button>
          <Button
            type="button"
            className="btn-save btn-success"
            onClick={handleSaveButton}
          >
            Save
          </Button>
        </GroupButtons>
      </Row>
    </BaseForm>
  );
}

export default FormDiagnosis;
