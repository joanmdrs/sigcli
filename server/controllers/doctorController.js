import {
    createDoctor,
    findManyDoctors,
    updateDoctorWithPrisma,
    deleteDoctorWithPrisma,
    findUniqueByCrmDoctor,
} from "../repositories/doctorRepository.js";

import { hashPassword } from '../service/cryptoService.js'
import { validateCRM } from "../service/validations.js";



export const registerDoctor = async (req, res) => {
    const { name, crm, phone, email, username, password } = req.body
    if (!validateCRM(crm.trim())){
        return res.status(406).json({msg: "Invalid CRM: 12 characters required"});
    }

    try {
        const userBody = { 
            username: username.trim(), 
            password: hashPassword(password), 
            role: "DOCTOR"
        };
        
        const doctorBody = {
            name: name.toLowerCase().trim(),
            crm: crm.trim(),
            phone: phone.trim(),
            email: email.trim(),
            username_fk: String(username)
      
        }
        
        const doctorCreated = await createDoctor(doctorBody, userBody)
        res.status(200).json(doctorCreated);

    } catch (error) {
        res.status(500).json({ msg: 'Server Error' })
    }
};


export const getDoctorByCrm = async (req, res) => {
    const { crm } = req.params;
    const doctor = await findUniqueByCrmDoctor(crm)
    return res.status(200).json(doctor);
}

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
    const crm = req.params.crm;
    const doctor = await findUniqueByCrmDoctor(crm);

    if(doctor === null || doctor === undefined) {
        return res.status(500)
        .json({msg: "Erro no servidor, não foi possível encontrar o médico"})
    }

    try {
        const id = doctor.id;
        const username = doctor.username_fk;
         
        const deletedDoctor = await deleteDoctorWithPrisma(id, username);
        return res.json(deletedDoctor);

    } catch(error) {
        res.status(500).json({msg : 'Ocorreu um problema no módulo de controle da entidade médico'})
    }
}

