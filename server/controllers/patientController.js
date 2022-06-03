import {
  createPatient,
  listPatient,
  findUniqueByCPFPatient,
  updatePatientWithPrisma,
  deletePatientWithPrisma
} from '../repositories/patientRepository.js'

import {validateCPF} from '../service/validations.js';

export const registerPatient = async (req, res) => {
  const patientBody = req.body;
  if (!validateCPF(patientBody.cpf)) {
    return res.status(406).json({ msg: "CPF inválido!" });
  }
  
  try{
    const patient = await createPatient(patientBody);
    res.status(200).json(patient);
  }catch(error){
    res.status(500).json({msg:"Error no servidor!"});
  }
  
}

export const listPatients = async (req, res) => {
  const listPatients = await listPatient()
  return res.status(200).json(listPatients)
}

export const getPatientByCPF = async (req, res) => {
  const { id } = req.params;
  const patient = await findUniqueByCPFPatient(id);
  return res.status(200).json(patient);
}

export const updatePatient = async (req, res) => {
  const patient = req.body
  const updatedPatient = await updatePatientWithPrisma(patient)
  res.json(updatedPatient)
}

export const deletePatient = async (req, res) => {
  const id = req.params.id
  const deletedPatient = await deletePatientWithPrisma(id)
  res.json(deletedPatient)
}
