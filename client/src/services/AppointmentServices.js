import api from "./api"

export const addAppointment = (appointment) => {

    const {title, patient_cpf, patient_name, doctor_crm, doctor_name, description} = appointment;

    api.post("/appointment/register", {
        title: title,
        patient_cpf: patient_cpf,
        patient_name: patient_name,
        crm_doctor: doctor_crm,
        doctor_name: doctor_name,
        description: description
    });

}

export const getAppointments = async () => {
    const res = await api.get("/appointment/getAll");
    const data = res.data;    
    return JSON.stringify(data);
 }

