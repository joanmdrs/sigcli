import api from "./api"

export const addAppointment = (appointment) => {

    const {title, patient_cpf, doctor_crm, description} = appointment;



    api.post("/appointment/register", {
       title: title,
       patient_cpf: patient_cpf,
       doctor_crm: doctor_crm,
       description: description
    });

}