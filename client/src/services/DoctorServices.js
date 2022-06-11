import api from "./api";
import Swal from "sweetalert2";

export const addDoctor = (data) => {
    const {name, crm, phone, email, username, password} = data;

    api.post("/doctors", {
      name: name,
      crm: crm,
      phone: phone,
      email: email,
      username: username,
      password: password
    });
}

export const getDoctorByCrm = async (crmProvided) => {
    const res = await api.get(`/doctors/${crmProvided}`);
    const data = res.data;
    return JSON.stringify(data);
}

export const updateDoctor = (id, data) => {
    const {name, crm, phone, email, username, password} = data;

    api.put(`/doctors/${id}`, {
      id: id,
      name: name,
      crm: crm,
      phone: phone,
      email: email,
      username: username,
      password: password
    });
}

export const deleteDoctor = (id) => {
    api.delete(`/doctors/${id}`);
}

export const getDoctors = async () => {
    const res = await api.get("/doctors");
    const data = res.data;
    return JSON.stringify(data);
}

export const getValuesInput = () => {
    const data = {
       name: document.getElementById("input-name").value,
       crm: document.getElementById("input-crm").value,
       phone: document.getElementById("input-phone").value,
       email: document.getElementById("input-email").value,
       username: document.getElementById("input-username").value,
       password: document.getElementById("input-password").value
   };
   return data;
}

export const getActionForm = () => {
    const action = document.getElementById("form-doctor").dataset.action;
    return action;
}

export const setFields = (data) => {
    const {id, name, crm, phone, email, username, password} = data;
    document.getElementById("form-doctor").dataset.action = id;
    document.getElementById("input-name").value = name;
    document.getElementById("input-crm").value = crm;
    document.getElementById("input-phone").value = phone;
    document.getElementById("input-email").value = email;
    document.getElementById("input-username").value = username;
    document.getElementById("input-password").value = password;
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
