import api from "./api"
import Swal from 'sweetalert2';


export const getValuesInput = () => {
    return {
       title: document.getElementById("title").value,
       patient_cpf: document.getElementById("patient-cpf").value,
       patient_name: document.getElementById("patient-name").value,
       doctor_crm: document.getElementById("doctor-crm").value,
       doctor_name: document.getElementById("doctor-name").value,
       data_appointment: document.getElementById("data-appointment").value,
       hour_appointment: document.getElementById("hour-appointment").value,
       description: document.getElementById("description").value
   };
 }
 
 export const getActionForm = () => {
    return document.getElementById("form-appointment").dataset.action;
 }
 
 export const addAppointment = (data) => {
 
    const { 
      title, 
      patient_cpf, 
      patient_name, 
      doctor_crm, 
      doctor_name, 
      data_appointment, 
      hour_appointment, 
      description} = data;

    return api.post("/appointments", {
      title: title,
      patient_cpf: patient_cpf,
      patient_name: patient_name,
      doctor_crm: doctor_crm,
      doctor_name: doctor_name,
      data_appointment: data_appointment,
      hour_appointment: hour_appointment,
      description: description
    });
}

export const getAppointments = async () => {
    const res = await api.get("/appointments");
    const data = res.data;    
    return JSON.stringify(data);
 }


 export const setFields = (data) => {

    const {
      id, 
      title, 
      patient_cpf, 
      patient_name, 
      doctor_crm, 
      doctor_name, 
      data_appointment, 
      hour_appointment, 
      description} = data;
 
    document.getElementById("form-appointment").dataset.action = id;
    document.getElementById("title").value = title;
    document.getElementById("patient-cpf").value = patient_cpf;
    document.getElementById("patient-name").value = patient_name;
    document.getElementById("doctor-crm").value = doctor_crm;
    document.getElementById("doctor-name").value = doctor_name;
    document.getElementById("data-appointment").value = data_appointment;
    document.getElementById("hour-appointment").value = hour_appointment;
    document.getElementById("description").value = description;
 }
 
 export const updateAppointment = (id, data) => {
 
    const {
      title, 
      patient_cpf, 
      patient_name, 
      doctor_crm, 
      doctor_name, 
      data_appointment, 
      hour_appointment, 
      description} = data;
 
    return api.put(`/appointments/${id}`, {
      id: id,
      title: title,
      patient_cpf: patient_cpf,
      patient_name: patient_name,
      doctor_crm: doctor_crm,
      doctor_name: doctor_name,
      data_appointment: data_appointment,
      hour_appointment: hour_appointment,
      description: description
    });    
}

export const deleteAppointment = (id) => {

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
      api.delete(`/appointments/${id}`);
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
 
export const messagePrepareToUpdate = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'info',
    showCancelButton: false,
    confirmButtonColor: '#0C6170',
    confirmButtonText: 'Ok',
  });
}

