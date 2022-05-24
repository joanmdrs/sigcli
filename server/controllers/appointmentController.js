import {
    createAppointment,
    listAppointmentWithPrisma,
    updateAppointmentWithPrisma,
    deleteAppointmentWithPrisma
} from "../repositories/appointmentRepository.js";


export const registerAppointment = async (req, res) => {
    const appointmentBody = req.body
    const appointment = await createAppointment(appointmentBody)
    res.json(appointment);
};

export const listAppointment = async (req, res) => {
    const appointmentList = await listAppointmentWithPrisma();
    res.status(200).json(appointmentList);
};


export const updateAppointment = async (req, res) => {
    const appointmentBody = req.body;
    const updatedAppointment = await updateAppointmentWithPrisma(appointmentBody);
    res.json(updatedAppointment);
};

export const deleteAppointment = async (req, res) => {
    const id = req.params.id;
    const deletedAppointment = await deleteAppointmentWithPrisma(id);
    res.json(deletedAppointment);
};