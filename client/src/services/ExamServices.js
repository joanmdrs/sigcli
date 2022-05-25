import api from "./api";
import Swal from 'sweetalert2';



export const getValuesInput = () => {
   const data = {
      title: document.getElementById("title").value,
      patient_cpf: document.getElementById("patient-cpf").value,
      patient_name: document.getElementById("patient-name").value,
      doctor_crm: document.getElementById("doctor-crm").value,
      doctor_name: document.getElementById("doctor-name").value,
      description: document.getElementById("description").value
  };

  return data;
}

export const getActionForm = () => {
   const action = document.getElementById("form-exam").dataset.action;
   return action;
}

export const addExam = (data) => {

    const {title, patient_cpf, patient_name, doctor_crm, doctor_name, description} = data;

    api.post("/exam/register", {
      title: title,
      patient_cpf: patient_cpf,
      patient_name: patient_name,
      crm_doctor: doctor_crm,
      doctor_name: doctor_name,
      description: description
    });
  
}

export const getExams = async () => {
   const res = await api.get("/exam/getAll");
   const data = res.data;    
   return JSON.stringify(data);
}


export const setFields = (data) => {

   const {id, title, patient_cpf, patient_name, crm_doctor, doctor_name, description} = data;

   document.getElementById("form-exam").dataset.action = id;
   document.getElementById("title").value = title;
   document.getElementById("patient-cpf").value = patient_cpf;
   document.getElementById("patient-name").value = patient_name;
   document.getElementById("doctor-crm").value = crm_doctor;
   document.getElementById("doctor-name").value = doctor_name;
   document.getElementById("description").value = description;
}

export const updateExam = (id, data) => {

   const {title, patient_cpf, patient_name, doctor_crm, doctor_name, description} = data;

   api.put("/exam/update", {
      id: id,
      title: title,
      patient_cpf: patient_cpf,
      patient_name: patient_name,
      crm_doctor: doctor_crm,
      doctor_name: doctor_name,
      description: description

   });
}

export const deleteExam = (id) => {
   api.delete(`/exam/delete/${id}`);
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
      title: 'Edit Exam',
      text: "Now you will edit this Exam's informations, be careful.",
      icon: 'info',
      showCancelButton: false,
      confirmButtonColor: '#0C6170',
      confirmButtonText: 'Ok',
  });
}



