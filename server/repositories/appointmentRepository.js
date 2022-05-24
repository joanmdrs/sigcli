import { prisma } from "../service/prisma.js";

export const createAppointment = async (appointment) => {
  console.log("Estou em Repository:", appointment);
    return await prisma.appointment.create({
        data : {
            title: String(exam.title),
            cpf_hash_patient: String(exam.patient_cpf),
            crm_doctor: String(exam.doctor_crm),
            description: String(exam.description)
        }
    });
    
}