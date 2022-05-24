import { prisma } from "../service/prisma.js";

export const createAppointment = async (appointment) => {
  console.log("Estou em Repository:", appointment);
    return await prisma.appointment.create({
        data : {
            title: String(appointment.title),
            patient_cpf: String(appointment.patient_cpf),
            patient_name: String(appointment.patient_name),
            crm_doctor: String(appointment.crm_doctor),
            doctor_name: String(appointment.doctor_name),
            description: String(appointment.description)   
        }
    });

}