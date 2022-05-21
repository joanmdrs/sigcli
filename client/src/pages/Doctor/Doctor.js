import './Doctor.css';
import React, { useState, useEffect } from "react";
import api from "../../services/api";

function Doctor(){
    //axios get post put delete
    const [values, setValues] = useState();
    const [doctorSearch, setDoctorSearch] = useState([]);

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
          //handleUpdateButton();
        }
    };

    const handleSaveButton = async () => {
        await api.post("/doctor/register", {
            name: values.name,
            crm: values.crm,
            username: values.username,
            password: values.password,
        });

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
        api.get("/doctor/getAll").then((response) => {
            setDoctorSearch(response.data);
        })
    }, []);

    return (
        <div className="App">
            <div>
                <h1>Add doctor</h1>
                <div
                className="form-add-doctor needs-validation"
                id="form-doctor"
                data-action="new"
                >
                <input
                    type="text"
                    name="id"
                    placeholder=" id"
                    className="input-id-doctor"
                    id="input-id"
                />
                <input
                    type="text"
                    className="input-name-doctor"
                    name="name"
                    placeholder="name"
                    id="input-name"
                    required
                    onChange={handleChangeValues}
                />
                <input
                    type="text"
                    className="input-crm-doctor"
                    name="crm"
                    placeholder="crm"
                    id="input-crm"
                    required
                    onChange={handleChangeValues}
                />
                <input
                    type="text"
                    className="input-username-doctor"
                    name="username"
                    placeholder="username"
                    id="input-username"
                    required
                    onChange={handleChangeValues}
                />
                <input
                    type="password"
                    className="input-password-doctor"
                    name="password"
                    placeholder="password"
                    id="input-password"
                    required
                    onChange={handleChangeValues}
                />
                <button
                    type="submit"
                    className="button-save-doctor"
                    id="input-button"
                    onClick={() => {
                      handleClickButton();
                    }}
                >
                    Save
                </button>
                </div>
            </div>

            <div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>CRM</th>
                                <th>Username</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {doctorSearch.map((doctor) => {
                            return (
                                <tr key={doctor.crm}>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.crm}</td>
                                    <td>{doctor.username}</td>
                                    <td>
                                        <button className="card-button">Edit</button>
                                        <button className="card-button">Del</button>
                                    </td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Doctor;