import api from "./api"
import Swal from 'sweetalert2';


export const getValuesInput = () => {
    const data = {
       title: document.getElementById("title").value,
       data_appointment: document.getElementById("data-appointment").value,
       hour_appointment: document.getElementById("hour-appointment").value,
       description: document.getElementById("description").value,
       patient_fk: document.getElementById("patient-cpf").value,
       doctor_fk: document.getElementById("doctor-crm").value
   };
 
   return data;
 }
 
 export const getActionForm = () => {
    const action = document.getElementById("form-appointment").dataset.action;
    return action;
 }
 
 export const addAppointment = (data) => {
 
    const { 
      title,
      data_appointment, 
      hour_appointment, 
      description, 
      patient_fk, 
      doctor_fk} = data;

    let response = api.post("/appointments", {
      title: title,
      data_appointment: data_appointment,
      hour_appointment: hour_appointment,
      description: description,
      patient_fk: patient_fk,
      doctor_fk: doctor_fk
    });

    return response;
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
    data_appointment, 
    hour_appointment, 
    description, 
    patient_fk, 
    doctor_fk} = data;
 
    document.getElementById("form-appointment").dataset.action = id;
    document.getElementById("title").value = title;
    document.getElementById("data-appointment").value = data_appointment;
    document.getElementById("hour-appointment").value = hour_appointment;
    document.getElementById("description").value = description;
    document.getElementById("patient-cpf").value = patient_fk;
    document.getElementById("doctor-crm").value = doctor_fk;
 }
 
 export const updateAppointment = (id, data) => {
 
    const { 
      title,
      data_appointment, 
      hour_appointment, 
      description, 
      patient_fk, 
      doctor_fk} = data;
 
    let response = api.put(`/appointments/${id}`, {
      id: id,
      title: title,
      data_appointment: data_appointment,
      hour_appointment: hour_appointment,
      description: description,
      patient_fk: patient_fk, 
      doctor_fk: doctor_fk
    });

    return response;

    
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

