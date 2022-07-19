import {
    createExam,
    listExamWithPrisma,
    updateExamWithPrisma,
    deleteExamWithPrisma
} from '../repositories/examRepository.js'

import { findUniqueByCPFPatient } from '../repositories/patientRepository.js';
import {findUniqueByCrmDoctor} from '../repositories/doctorRepository.js';


export const registerExam = async (req, res) => {
    const { title, description, patient_fk, doctor_fk } = req.body;

    const patient = await findUniqueByCPFPatient(patient_fk);
    const doctor = await findUniqueByCrmDoctor(doctor_fk);

    if(patient === null || patient === undefined) {
        res.status(500).json({msg: "Paciente não registrado no sistema."});
    }

    if(doctor === null || doctor === undefined) {
        res.status(500).json({msg: "Médico não registrado no sistema."});
    }
    
    
    try{
        const examBody = {
            title: title,
            description: description,
            patient_fk: patient_fk,
            doctor_fk: doctor_fk
        }
        const exam = await createExam(examBody);
        res.status(200).json(exam);
        
    }catch(error){
        res.status(500).json({msg:"Error no servidor!"});
    }
}

export const listExam = async (req, res) => {
    const examList = await listExamWithPrisma();
    res.status(200).json(examList);
}


export const updateExam = async (req, res) => {
    const {id, title, description, patient_fk, doctor_fk } = req.body;

    const patient = await findUniqueByCPFPatient(patient_fk);
    const doctor = await findUniqueByCrmDoctor(doctor_fk);

    if(patient === null || patient === undefined) {
        res.status(500).json({msg: "Paciente não registrado no sistema."});
    }

    if(doctor === null || doctor === undefined) {
        res.status(500).json({msg: "Médico não registrado no sistema."});
    }
    
    try{
        const examBody = {
            id: id,
            title: title,
            description: description,
            patient_fk: patient_fk,
            doctor_fk: doctor_fk
        }
        const updatedExam = await updateExamWithPrisma(examBody);
        res.json(updatedExam);
    }catch(error){
        res.status(500).json({msg:"Error no servidor!"});
    }
}

export const deleteExam = async (req, res) => {
    const id = req.params.id;
    const deletedExam = await deleteExamWithPrisma(id);
    res.json(deletedExam);
}
