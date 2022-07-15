import api from "./api";
import Swal from 'sweetalert2';

export const getValuesInput = () => {
   return {
      title: document.getElementById("title").value,
      patient_cpf: document.getElementById("patient-cpf").value,
      patient_name: document.getElementById("patient-name").value,
      doctor_crm: document.getElementById("doctor-crm").value,
      doctor_name: document.getElementById("doctor-name").value,
      description: document.getElementById("description").value
  };
}

export const getActionForm = () => {
   return document.getElementById("form-exam").dataset.action;
}


export const addExam = async (data) => {

   const {title, patient_cpf, doctor_crm, description} = data;

   await api.post("/exams", {
      title: title,
      patient_fk: patient_cpf,
      doctor_fk: doctor_crm,
      description: description
   });
  
}


export const getExams = async () => {
   const res = await api.get("/exams");
   const data = res.data;    
   return JSON.stringify(data);
}


export const setFields = (data, patient_name, doctor_name) => {

   const {id, title, patient_fk, doctor_fk, description} = data;

   document.getElementById("form-exam").dataset.action = id;
   document.getElementById("title").value = title;
   document.getElementById("patient-cpf").value = patient_fk;
   document.getElementById("patient-name").value = patient_name;
   document.getElementById("doctor-crm").value = doctor_fk;
   document.getElementById("doctor-name").value = doctor_name;
   document.getElementById("description").value = description;
}


export const updateExam = (id, data) => {

   const {title, patient_cpf, doctor_crm, description} = data;


   api.put(`/exams/${id}`, {
      id: id,
      title: title,
      patient_fk: patient_cpf,
      doctor_fk: doctor_crm,
      description: description
   });
}


export const deleteExam = (id) => {

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
        api.delete(`/exams/${id}`);
        document.location.reload();
      }
   });
}
  

export const messageSucess = (message) => {
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
      title: "Failure",
      text: message,
      icon: "error",
      showCancelButton: false,
      confirmButtonColor: "#0C6170",
      confirmButtonText: "Ok",
   }).then((result) => {
      if (result.isConfirmed) {
        document.location.reload();
      }
   });
}


export const messagePrepareToUpdate = () => {
   Swal.fire({
      title: 'Edit Exam',
      text: "Now you will edit this Exam's informations, be careful.",
      icon: 'info',
      showCancelButton: false,
      confirmButtonColor: '#0C6170',
      confirmButtonText: 'Ok',
  });
}


