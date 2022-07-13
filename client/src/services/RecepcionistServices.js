import api from "./api";
import Swal from 'sweetalert2';

export const getValuesInput = () => {
   return {
      name: document.getElementById("name").value,
      cpf: document.getElementById("cpf").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value
  };
}

export const getActionForm = () => {
   return document.getElementById("form-recepcionist").dataset.action;
}

export const addRecepcionist = (data) => {

    const {name, cpf, phone, email, username, password} = data;

    api.post("/recepcionists", {
      name: name,
      cpf: cpf,
      phone: phone,
      email: email,
      username: username,
      password: password
    });
  
}

export const getAllRecepcionist = async () => {
   const res = await api.get("/recepcionists");

   const data = res.data;    
   return JSON.stringify(data);
}

export const getOneRecepcionist = async (id) => {
   const res = await api.get(`/recepcionists/${id}`);
   const data = res.data;
   return JSON.stringify(data);
}


export const setFields = (data) => {

   const {id, name, cpf, phone, email, username, password} = data;

   document.getElementById("form-recepcionist").dataset.action = id;
   document.getElementById("name").value = name;
   document.getElementById("cpf").value = cpf;
   document.getElementById("phone").value = phone;
   document.getElementById("email").value = email;
   document.getElementById("username").value = username;
   document.getElementById("password").value = password;
}

export const updateRecepcionist = (id, data) => {

   const {name, cpf, phone, email, username, password} = data;


   api.put(`/recepcionists/${id}`, {
     id: id,
     name: name,
     cpf: cpf,
     phone: phone,
     email: email,
     username: username,
     password: password,
   });
}

export const deleteRecepcionist = (id) => {
   api.delete(`/recepcionists/${id}`);
}

export const clearFields = () => {
   document.getElementById("title").value = "";
   document.getElementById("patient-cpf").value = "";
   document.getElementById("patient-name").value = "";
   document.getElementById("doctor-crm").value = "";
   document.getElementById("doctor-name").value = "";
   document.getElementById("description").value = "";
};
 
export const messageConfirm = (message) => {

   Swal.fire({
      title: 'Success',
      text: `${message}`,
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

export const messagePrepareToUpdate = () => {
   Swal.fire({
      title: 'Edit Recepcionist',
      text: "Now you will edit this Recepcionist's informations, be careful.",
      icon: 'info',
      showCancelButton: false,
      confirmButtonColor: '#0C6170',
      confirmButtonText: 'Ok',
  });
}


export const messageConfirmDelete = (id) => {
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


