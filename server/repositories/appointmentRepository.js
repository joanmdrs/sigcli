import { prisma } from "../service/prisma.js";

export const createAppointment = async (appointment) => {
    return await prisma.appointment.create({
        data : {
            title: String(appointment.title),
            data_appointment: String(appointment.data_appointment),
            hour_appointment: String(appointment.hour_appointment),
            description: String(appointment.description), 
            patient_fk: String(appointment.patient_fk),
            doctor_fk: String(appointment.doctor_fk)
        }
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