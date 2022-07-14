import api from "./api";
import Swal from 'sweetalert2';

<<<<<<< HEAD
export const getValuesInput = () => {
   return {
=======
// INSERT A RECEPCIONIST
export const createRecepcionist = (recepcionist) => {

   let response = api.post("/recepcionists/register", {
     name: recepcionist.name,
     cpf: recepcionist.cpf,
     phone: recepcionist.phone,
     email: recepcionist.email,
     username: recepcionist.username,
     password: recepcionist.password
   });
   
   return response;
}

// LIST ALL RECEPCIONISTS
export const getAllRecepcionist = async () => {
   const res = await api.get("/recepcionists/getAll");
   const data = res.data;    
   return JSON.stringify(data);
}

// FIND ONE RECEPCIONIST BY CPF
export const getOneRecepcionist = async (cpf) => {
   const res = await api.get(`/recepcionists/${cpf}`);
   const data = res.data;
   return JSON.stringify(data);
}

// UPDATE RECEPCIONIST 
export const updateRecepcionist = (recepcionist) => {

   let response = api.put(`/recepcionists/${recepcionist.id}`, {
     id: recepcionist.id,
     name: recepcionist.name,
     cpf: recepcionist.cpf,
     phone: recepcionist.phone,
     email: recepcionist.email
   });

   return response;
}

// DELETE ONE RECEPCIONIST
export const removeRecepcionist = (cpf) => {
   return api.delete(`/recepcionists/${cpf}`);
}

// GET VALUES OF FORM RECEPCIONIST
export const getValuesFormRecepcionist = () => {

   const recepcionist = {
      id: document.getElementById("form-recepcionist").dataset.action,
>>>>>>> feat/issue108
      name: document.getElementById("name").value,
      cpf: document.getElementById("cpf").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value
  };
<<<<<<< HEAD
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
=======

  return recepcionist;
}

// SET VALUES OF FORM RECEPCIONIST
>>>>>>> feat/issue108


export const setFieldsFormRecepcionist = (recepcionist) => {

   console.log(recepcionist)
   const {id, name, cpf, phone, email, username_fk} = recepcionist;

   document.getElementById("form-recepcionist").dataset.action = id;
   document.getElementById("name").value = name;
   document.getElementById("phone").value = phone;
   document.getElementById("email").value = email;

   let cpfField = document.getElementById("cpf");
   cpfField.value = cpf;
   cpfField.disabled = true;


   let username = document.getElementById("username");
   username.value = username_fk;
   username.disabled = true;

   let senha = document.getElementById("password");
   senha.value = "********"
   senha.disabled = true;
}
 





