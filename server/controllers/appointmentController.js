import {
    createAppointment,
    //listAppointmentWithPrisma,
    //updateAppointmentWithPrisma,
    //deleteAppointmentWithPrisma
} from "../repositories/appointmentRepository.js";


export const registerAppointment = async (req, res) => {
    const appointmentBody = req.body
    const appointment = await createAppointment(appointmentBody)
    res.json(appointment);
};