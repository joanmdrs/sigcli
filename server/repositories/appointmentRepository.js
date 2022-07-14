import { prisma } from "../service/prisma.js";

export const createAppointment = async (appointment) => {
    return await prisma.appointment.create({
        data : appointment,
    });

}

export const listAppointmentWithPrisma = async () => {
    return await prisma.appointment.findMany();
};


export const updateAppointmentWithPrisma = async (appointment) => {
    const {
      id, 
      title, 
      patient_cpf, 
      patient_name, 
      doctor_crm, 
      doctor_name, 
      data_appointment, 
      hour_appointment, 
      description} = appointment;
      
    return await prisma.appointment.update({
        where: {
          id: Number(id),
        },
        data: {
            title,
            patient_cpf, 
            patient_name, 
            doctor_crm, 
            doctor_name,
            data_appointment,
            hour_appointment,
            description
        },
  });
};

export const deleteAppointmentWithPrisma = async (appointmentID) => {
    return await prisma.appointment.delete({
      where: {
        id: Number(appointmentID),
      },
    });
  };