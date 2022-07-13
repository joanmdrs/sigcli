import api from "./api";
import Swal from 'sweetalert2';

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
      name: document.getElementById("name").value,
      cpf: document.getElementById("cpf").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value
  };

  return recepcionist;
}

// SET VALUES OF FORM RECEPCIONIST


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
 





