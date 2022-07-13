import api from "./api";

// INSERT A PATIENT
export const createPatient = (patient) => {
  

  let response = api.post("/patients/register", {
    name: patient.name,
    cpf: patient.cpf,
    phone: patient.phone,
    email: patient.email,
    username: patient.username,
    password: patient.password,
  });

  return response;
}



// LIST ALL PATIENTS
export const listPatients = async () => {

  const res = await api.get("/patients/getAll");
  const data = res.data;    
  return JSON.stringify(data);

}

// FIND ONE PATIENT BY CPF
export const findPatientByCpf = async (cpf) => {

  const res = await api.get(`/patients/${cpf}`);
  const data = res.data;    
  return JSON.stringify(data);

}

// UPDATE PATIENT
export const updatePatient = (props) => {

  return api.put(`/patients/${props.id}`, {
    id: props.id,
    name: props.name,
    cpf: props.cpf,
    phone: props.phone,
    email: props.email
  });

}

// DELETE A PATIENT
export const removePatient = (cpf) => {
  return api.delete(`/patients/${cpf}`);
}

// GET VALUES OF FORM PATIENT
export const getValuesFormPatient = () => {

  const patient = {
    id : document.getElementById("form-patient").dataset.action,
    name : document.getElementById("name").value,
    cpf : document.getElementById("cpf").value,
    phone : document.getElementById("phone").value,
    email : document.getElementById("email").value, 
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  }

  return patient;
             
}

// SET VALUES OF FORM PATIENT
export const setFieldsFormPatient = (patient) => {
 
  const {id, name, cpf, phone, email, username_fk} = patient;

  document.getElementById("form-patient").dataset.action = id;
  document.getElementById("name").value = name;
  document.getElementById("phone").value = phone;
  document.getElementById("email").value = email; 

  let cpfField =  document.getElementById("cpf");
  cpfField.value = cpf;
  cpfField.disabled = true;

  let username = document.getElementById("username");
  username.value = username_fk;
  username.disabled = true;

  let senha = document.getElementById("password");
  senha.value = "********"
  senha.disabled = true;

}




