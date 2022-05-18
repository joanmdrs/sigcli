import './Patient.css';
import React from 'react';
import Nav from '../../components/Nav/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';
import { Form, FormGroup, Label, Input, Row, Col, Button, Table, InputGroup } from 'reactstrap';

export default function Patient() {
  return (
    <div className="container-patient">
      <Nav />
      <div className="box-patient">
        <div className="box-header-patient">
          <div className="box-icon-and-title">
            <FontAwesomeIcon className="icon" icon={faHospitalUser} />
            <h3> Patients </h3>
          </div>
          <div className="box-list-functions">
            <p>
              Patient registration: Include, Search, Change, Delete and List
            </p>
          </div>
        </div>
        <Form className="form-patient">
          <Row>
            <Col md={8}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input id="name" type="text" placeholder="name"></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="cpf">CPF</Label>
                <Input id="cpf" type="text" placeholder="cpf"></Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="phone"></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input id="email" type="email" placeholder="email"></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="username">Userame</Label>
                <Input id="username" type="text" placeholder="username"></Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input id="password" type="text" placeholder="password"></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col className="col-btn-save-cancel" md={12}>
              <Button type="button" className="btn-save btn-success">
                Save
              </Button>
              <Button type="submit" className="btn-cancel btn-danger">
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>

        <div className="input-search-patient">
          <Label for="searchCpf">Filter By CPF</Label>
          <InputGroup>
            <Input id="searchCpf" type="text" placeholder="cpf"></Input> 
            <Button color="success">
              Search
            </Button>
          </InputGroup>
        </div>
        

        <Table responsive hover borderless className='tablePatient'>
          <thead>
            <tr>
              <th>
                Id
              </th>
              <th>
                Name
              </th>
              <th>
                Username
              </th>
              <th>
                CPF
              </th>
              <th>
                Phone
              </th>
              <th>
                Email
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                1
              </th>
              <td>
                Table cell
              </td>
              <td>
                Table cell
              </td>
              <td>
                Table cell
              </td>
              <td>
                Table cell
              </td>
              <td>
                Table cell
              </td>
              <td>
                <button className="card-button">Edit</button>
                <button className="card-button">Del</button>
              </td>
            </tr>
            <tr>
              <th scope="row">
                2
              </th>
              <td>
                Table cell
              </td>
              <td>
                Table cell
              </td>
              <td>
                Table cell
              </td>
              <td>
                Table cell
              </td>
              <td>
                Table cell
              </td>
              <td>
                <button className="card-button">Edit</button>
                <button className="card-button">Del</button>
              </td>
            </tr>
            <tr>
              <th scope="row">
                3
              </th>
              <td>
                Table cell
              </td>
              <td>
                Table cell
              </td>
              <td>
                Table cell
              </td>
              <td>
                Table cell
              </td>
              <td>
                Table cell
              </td>
              <td>
                <button className="card-button">Edit</button>
                <button className="card-button">Del</button>
              </td>
            </tr>
          </tbody>
        </Table>

      </div>
    </div>
  )
}
