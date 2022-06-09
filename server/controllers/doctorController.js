import {
    createDoctor,
    findManyDoctors,
    updateDoctorWithPrisma,
    deleteDoctorWithPrisma,
} from "../repositories/doctorRepository.js";

import { hashPassword } from '../service/cryptoService.js'


export const registerDoctor = async (req, res) => {
    // const doctorBody = req.body;
    // const doctor = await createDoctor(doctorBody);
    // res.json(doctor);
    const { name, crm, phone, email, username, password } = req.body

    try {
        const doctorBody = {
        name: name.toLowerCase().trim(),
        crm: crm.trim(),
        phone: phone.trim(),
        email: email.trim(),
        username,
        password: hashPassword(password)
        }
        const doctor = await createDoctor(doctorBody)
        res.status(200).json(doctor)
    } catch (error) {
        res.status(500).json({ msg: 'Error no servidor! Procure o administrador!' })
    }
};
export const getDoctors = async (req, res) => {
    const doctors = await findManyDoctors();
    res.json(doctors);
};

export const updateDoctor = async (req, res) => {
    const doctor = req.body;
    const updatedDoctor = await updateDoctorWithPrisma(doctor);
    res.json(updatedDoctor);
};

export const deleteDoctor = async (req, res) => {
    const id = req.params.id;
    const deletedDoctor = await deleteDoctorWithPrisma(id);
    return res.json(deletedDoctor);
};
