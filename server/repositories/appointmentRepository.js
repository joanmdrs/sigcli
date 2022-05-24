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

export const listAppointmentWithPrisma = async () => {
    return await prisma.appointment.findMany();
};


export const updateAppointmentWithPrisma = async (appointment) => {
    const { id, title, patient_cpf, patient_name, crm_doctor, doctor_name, description } = appointment;
    return await prisma.appointment.update({
        where: {
          id: Number(id),
        },
        data: {
            title,
            patient_cpf, 
            patient_name, 
            crm_doctor, 
            doctor_name,
            description
        },
  });
};