import {
  createPatient,
  listPatient,
  findUniqueByIDPatient,
  updatePatientWithPrisma,
  deletePatientWithPrisma
} from '../repositories/patientRepository.js'

import {validateCPF} from '../service/validations.js';

export const registerPatient = async (req, res) => {
  const {name, cpf, phone, email,username, password} = req.body;
  if (!validateCPF(cpf)) {
    return res.status(406).json({ msg: "CPF inválido!" });
  }
  try{
    const patientBody = {
      name: name.toLowerCase().trim(),
      cpf: cpf.trim(),
      phone: phone.trim(),
      email: email.trim(),
      username,
      password
    }
    const patient = await createPatient(patientBody);
    res.status(200).json(patient);
  }catch(error){
    res
      .status(500)
      .json({ msg: "Error no servidor! Procure o administrador!" });
  }
  
}

export const listPatients = async (req, res) => {
  const listPatients = await listPatient()
  return res.status(200).json(listPatients)
}

export const getPatientByID = async (req, res) => {
  const { id } = req.params;
  const patient = await findUniqueByIDPatient(id);
  return res.status(200).json(patient);
}

export const updatePatient = async (req, res) => {
  const idReceived = req.params.id;
  const { id, name, cpf, phone, email, username, password } = req.body;
  if (!validateCPF(cpf)) {
    return res.status(406).json({ msg: "CPF inválido!" });
  }
  try {
    const patientBody = {
      id,
      name: name.trim(),
      cpf: cpf.trim(),
      phone: phone.trim(),
      email: email.trim(),
      username: username.trim(),
      password: password.trim()
    };
    const updatedPatient = await updatePatientWithPrisma(
      patientBody,
      idReceived
    );
    res.status(200).json(updatedPatient);
  } catch (error) {
    res.status(500).json({ msg: "Error no servidor! Procure o administrador!" });
  }
}

export const deletePatient = async (req, res) => {
  const id = req.params.id
  const deletedPatient = await deletePatientWithPrisma(id)
  res.json(deletedPatient)
}
