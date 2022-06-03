import './Doctor.css';
import React, { useState, useEffect } from "react";
import { FormGroup, Label, Input, Row, Button, Table } from 'reactstrap';
import Nav from '../../components/Nav/Nav';
import api from "../../services/api";
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

function Doctor(){
    const [values, setValues] = useState();
    const [doctorList, setDoctorList] = useState([]);    

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
          ...prevValue,
          [value.target.name]: value.target.value,
          [value.target.crm]: value.target.crm,
          [value.target.username]: value.target.username,
          [value.target.password]: value.target.password,
        }));
    };

    const handleClickButton = () => {
        if (document.getElementById("form-doctor").dataset.action === "new") {
          handleSaveButton();
        } else {
          handleUpdateButton();
        }
    };

    const handleSaveButton = async () => {
        await api.post("/doctors", {
            name: values.name,
            crm: values.crm,
            username: values.username,
            password: values.password,
        });

        Swal.fire({
            title: 'Success',
            text: 'New doctor added.',
            icon:'success',
            showCancelButton: false,
            confirmButtonColor: '#0C6170',
            confirmButtonText: 'Ok',
        }).then((result) => {
            if (result.isConfirmed) {
                document.location.reload();
        }});

        setValues([
            ...values,
            {
                id: values.id,
                name: values.name,
                crm: values.crm,
                username: values.username,
                password: values.password,
            },
        ]);
    };

    useEffect(() => {
        api.get("/doctors").then((response) => {
            setDoctorList(response.data);
        })
    }, []);

    const handleUpdateButton = async () => {
        const id = document.getElementById("input-id").value;
        const name = document.getElementById("input-name").value;
        const crm = document.getElementById("input-crm").value;
        const username = document.getElementById("input-username").value;
        const password = document.getElementById("input-password").value;

        api.put(`/doctor/${id}`, {
            id: id,
            name: name,
            crm: crm,
            username: username,
            password: password,
        });

        Swal.fire({
            title: 'Success',
            text: 'The informations about this doctor were updated.',
            icon:'success',
            showCancelButton: false,
            confirmButtonColor: '#0C6170',
            confirmButtonText: 'Ok',
        }).then((result) => {
            if (result.isConfirmed) {
                document.location.reload();
        }});
    }

    const deleteDoctor = async (doctorId) => {
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
            api.delete(`/doctors/${doctorId}`);
            document.location.reload();
        }})
    }

    return (
        <div className="container m-0 p-0">
            <Row>
                <div className='col-sm-3 p-0'>
                    <Nav />
                </div>
                <div className='col-sm-6'>
                    <Table responsive hover borderless className='tableFilterPatient' id='filterTable'>
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">CRM</th>
                                <th scope="col">Username</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctorList.map((doctor) => {
                            return (
                                <tr key={doctor.crm}>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.crm}</td>
                                    <td>{doctor.username}</td>
                                    <td>
                                        <button className="card-button m-1" onClick={() => {
                                            Swal.fire({
                                                title: 'Edit Doctor',
                                                text: "Now you will edit this Doctor's informations, be careful.",
                                                icon:'info',
                                                showCancelButton: false,
                                                confirmButtonColor: '#0C6170',
                                                confirmButtonText: 'Ok',
                                            });
                                            document.getElementById("input-id").defaultValue = doctor.id;
                                            document.getElementById("input-name").defaultValue = doctor.name;
                                            document.getElementById("input-crm").defaultValue = doctor.crm;
                                            document.getElementById("input-username").defaultValue = doctor.username;
                                            document.getElementById("input-password").defaultValue = doctor.password;
                                            document.getElementById("form-doctor").dataset.action = "edit";
                                        }}
                                        >Edit</button>
                                        <button className="card-button m-1" onClick={() =>
                                            deleteDoctor(doctor.id)
                                        }>Del</button>
                                    </td>
                                </tr>
                            )})}
                        </tbody>
                    </Table>
                </div>
                <div className='col-sm-3 card mt-1'>
                    <h1 className='text-center'>Add doctor</h1>
                    <div
                    className="form-add-doctor card-body"
                    id="form-doctor"
                    data-action="new"
                    >
                        <FormGroup>
                            <Input id="input-id" name="id" type="text" placeholder="id" className="input-id-doctor"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="input-name">Name:</Label>
                            <Input id="input-name" name="name" type="text" placeholder="Name" className="input-name-doctor" required onChange={handleChangeValues}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="input-crm">CRM:</Label>
                            <Input id="input-crm" name="crm" type="text" placeholder="CRM" className="input-crm-doctor" required onChange={handleChangeValues}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="input-username">Username:</Label>
                            <Input id="input-username" name="username" type="text" placeholder="Username" className="input-username-doctor" required onChange={handleChangeValues}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="input-password">Password:</Label>
                            <Input id="input-password" name="password" type="password" placeholder="Password" className="input-password-doctor" required onChange={handleChangeValues}></Input>
                        </FormGroup>
                        <Button type="submit" className="btn btn-primary" onClick={() => {
                            handleClickButton();
                        }}>Save</Button>
                    </div>
                </div>
            </Row>
        </div>
    );
};

export default Doctor;