import {findUniqueByCPFPatient} from '../repositories/patientRepository.js';
import { findUniqueByCrmDoctor } from '../repositories/doctorRepository.js';

import { validateCPF } from '../service/validations.js';

import { createDiagnosis } from '../repositories/diagnosisRepository.js';
export const registerDiagnosis = async (req, res) => {
    const {illness, description, patient_cpf, doctor_crm, appointment_id} = req.body;

    if(!validateCPF(patient_cpf)){
        return res.status(406).json({msg: 'CPF Inválido!'});
    }

    if(!findUniqueByCPFPatient(patient_cpf)){
        return res.status(406).json({msg: 'Paciente não encontrado!'});
    }

    if(!findUniqueByCrmDoctor(doctor_crm)){
        return res.status(406).json({msg: 'Médico não encontrado!'});
    }

    

    try {
        const diagnosisBody = {
          illness,
          description,
          patient_cpf: patient_cpf.trim(),
          doctor_crm: doctor_crm.trim(),
          appointment_id,
        };

        const diagnosis = await createDiagnosis(diagnosisBody);
        res.status(200).json(diagnosis);

    } catch (error) {
        res
          .status(500)
          .json({ msg: "Error no servidor! Procure o administrador!" });
    }
}