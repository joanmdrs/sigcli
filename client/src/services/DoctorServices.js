import api from "./api";
import Swal from "sweetalert2";

// INSERT A DOCTOR
export const createDoctor = async (data) => {
    const {name, crm, phone, email, username, password} = data;

    try {
        
        await api.post("/doctors", {
            name: name,
            crm: crm,
            phone: phone,
            email: email,
            username: username,
            password: password
        });
        messageConfirm("New doctor added.");
    } catch(error){
        messageFailure(error.response.data.msg);
        console.log(error);
    }
}


// LIST ALL DOCTORS
export const listAllDoctors = async () => {
    const res = await api.get("/doctors");
    const data = res.data;
    return JSON.stringify(data);
}


// FIND ONE DOCTOR BY CRM
export const findDoctorByCrm = async (crm) => {
    const res = await api.get(`/doctors/${crm}`);
    const data = res.data;
    return JSON.stringify(data);
}

// UPDATE DOCTOR
export const updateDoctor = async (doctor) => {

    const { id, name, crm, phone, email} = doctor;
    const response = await api.put(`/doctors/${id}`, {
      id: id,
      name: name,
      crm: crm,
      phone: phone,
      email: email
    });

    return response
}

// DELETE A DOCTOR
export const removeDoctor = (crm) => {
    return api.delete(`/doctors/${crm}`);
}

// GET VALUES OF FORM DOCTORS
export const getValuesFormDoctor = () => {
    const doctor = {
    
        id: document.getElementById("form-doctor").dataset.action,
        name: document.getElementById("input-name").value,
        crm: document.getElementById("input-crm").value,
        phone: document.getElementById("input-phone").value,
        email: document.getElementById("input-email").value,
        username: document.getElementById("input-username").value,
        password: document.getElementById("input-password").value
   };
   return doctor;
}

export const getActionForm = () => {
    return document.getElementById("form-doctor").dataset.action;
}

export const setFieldsFormDoctor = (data) => {
    const {id, name, crm, phone, email, username_fk} = data;
    document.getElementById("form-doctor").dataset.action = id;
    document.getElementById("input-name").value = name;
    document.getElementById("input-crm").value = crm;
    document.getElementById("input-phone").value = phone;
    document.getElementById("input-email").value = email;
    
    let crmField = document.getElementById("input-crm");
    crmField.value = crm;
    crmField.disabled = true;

    let username = document.getElementById("input-username");
    username.value = username_fk;
    username.disabled = true;

    let senha = document.getElementById("input-password");
    senha.value = "********"
    senha.disabled = true;
}

export const messagePrepareToUpdate = () => {
    Swal.fire({
       title: 'Edit Doctor',
       text: "Now you will edit this Doctor's informations, be careful.",
       icon: 'info',
       showCancelButton: false,
       confirmButtonColor: '#0C6170',
       confirmButtonText: 'Ok',
    });
}

export const messageConfirm = (message) => {
    Swal.fire({
       title: 'Success',
       text: message,
       icon: 'success',
       showCancelButton: false,
       confirmButtonColor: '#0C6170',
       confirmButtonText: 'Ok',
    }).then((result) => {
       if (result.isConfirmed) {
          document.location.reload();
       }
    });
}

export const messageFailure = (message) => {
    Swal.fire({
       title: 'Error',
       text: message,
       icon: 'error',
       showCancelButton: false,
       confirmButtonColor: '#0C6170',
       confirmButtonText: 'Ok',
    }).then((result) => {
       if (result.isConfirmed) {
          document.location.reload();
       }
    });
}
