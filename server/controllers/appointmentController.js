import {
    createAppointment,
    listAppointmentWithPrisma,
    updateAppointmentWithPrisma,
    deleteAppointmentWithPrisma
} from "../repositories/appointmentRepository.js";

import { validateDate } from "../service/validations.js";


export const registerAppointment = async (req, res) => {

   
    const {
        title, 
        patient_cpf, 
        patient_name, 
        doctor_crm, 
        doctor_name, 
        data_appointment, 
        hour_appointment, 
        description} = req.body;

    if(!validateDate(data_appointment)){
        return res.status(406).json({ msg: 'Formato de Data Inválido!' })
    }

    try {
        const appointmentBody = {
            title: title.toLowerCase().trim(),
            patient_cpf: patient_cpf.trim(),
            patient_name: patient_name,
            doctor_crm: doctor_crm,
            doctor_name: doctor_name,
            data_appointment: data_appointment,
            hour_appointment: hour_appointment,
            description: description
        }
        const appointment = await createAppointment(appointmentBody)
        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({ msg: 'Error no servidor! Procure o administrador!' })
    }
    
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