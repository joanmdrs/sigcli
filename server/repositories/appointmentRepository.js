import { prisma } from "../service/prisma.js";

export const createAppointment = async (appointment) => {
  console.log("Estou em Repository:", appointment);
    return await prisma.appointment.create({
        data : {
            title: String(appointment.title),
            cpf_hash_patient: String(appointment.patient_cpf),
            crm_doctor: String(appointment.doctor_crm),
            description: String(appointment.description)   
        }
    });

}