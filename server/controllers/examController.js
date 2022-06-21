import {
    createExam,
    listExamWithPrisma,
    updateExamWithPrisma,
    deleteExamWithPrisma
} from '../repositories/examRepository.js'

import {validateCPF} from '../service/validations.js';
import {findUniqueByCrmDoctor} from '../repositories/doctorRepository.js';


export const registerExam = async (req, res) => {
    const examBody = req.body;
    if (!validateCPF(examBody.patient_cpf)) {
        return res.status(406).json({ msg: "CPF do paciente inválido!" });
    }
    else if (!findUniqueByCrmDoctor(examBody.doctor_crm)) {
        return res.status(406).json({ msg: "CRM do Doutor inexistente!" });
    }
    
    try{
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
    const examBody = req.body;
    if (!validateCPF(examBody.patient_cpf)) {
        return res.status(406).json({ msg: "CPF do paciente inválido!" });
    }
    else if (!findUniqueByCrmDoctor(examBody.doctor_crm)) {
        return res.status(406).json({ msg: "CRM do Doutor inexistente!" });
    }
    
    try{
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
