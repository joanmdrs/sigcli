import {
  createPatient,
  listPatient,
  findUniqueByCPFPatient,
  updatePatientWithPrisma,
  deletePatientWithPrisma
} from '../repositories/patientRepository.js'

import { hashPassword } from '../service/cryptoService.js'

import { validateCPF, validatePhone } from '../service/validations.js'



export const registerPatient = async (req, res) => {

  const { name, cpf, phone, email, username, password } = req.body

  if (!validateCPF(cpf)) {
    return res.status(406).json({ msg: 'CPF Inválido!' })
  }

  if (!validatePhone(phone)) {
    return res.status(406).json({ msg: 'Telefone Inválido!' })
  }

  try {
    const userBody = { 
        username: username.trim(), 
        password: hashPassword(password), 
        role: "PATIENT"
    };
    
    const patientBody = {
      name: name, 
      cpf: cpf, 
      phone: phone,
      email: email,
      username_fk: String(username)
  
    }
    
    const patientCreated = await createPatient(patientBody, userBody)
    res.status(200).json(patientCreated);
      
  } catch (error) {
    console.log(error)
    res.status(500).json({msg: 'Ocorreu um erro ao tentar criar o paciente'})
  }

}

export const listPatients = async (req, res) => {
  try {
    const listPatients = await listPatient();
    
    if (listPatients.length == 0) {
      res.status(404).json({ msg: 'Não existe pacientes cadastrados!' })
    } else {
      res.status(200).json(listPatients)
    }
  } catch (error) {
    res.status(500).json({ msg: 'Error no servidor! Procure o administrador!' })
  }
}

export const getPatientByCPF = async (req, res) => {
  const { cpf } = req.params
  try {
    const patient = await findUniqueByCPFPatient(cpf)
    if (patient == undefined) {
      res.status(404).json({ msg: 'Paciente não encontrado!' })
    } else {
      res.status(200).json(patient)
    }
  } catch (error) {
    res.status(500).json({ msg: 'Error no servidor! Procure o administrador!' })
  }
}

export const updatePatient = async (req, res) => {
  const idReceived = req.params.id
  const { id, name, cpf, phone, email } = req.body
  if (!validateCPF(cpf)) {
    return res.status(406).json({ msg: 'CPF inválido!' })
  }
  if (!validatePhone(phone)) {
    return res.status(406).json({ msg: 'Telefone Inválido!' })
  }

  try {
    const patientBody = {
      id,
      name: name.trim(),
      cpf: cpf.trim(),
      phone: phone.trim(),
      email: email.trim(),
    }
    const updatedPatient = await updatePatientWithPrisma(
      patientBody,
      idReceived
    )
    res.status(200).json(updatedPatient)
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Error no servidor! Procure o administrador!' })
  }
}

export const deletePatient = async (req, res) => {

  const cpfReceived = req.params.cpf;
  const patient = await findUniqueByCPFPatient(cpfReceived);

  if (patient === null || patient === undefined)  {
    return res.status(500)
              .json({msg: "Erro no servidor, não foi possível encontrar o paciente"})
  }

  try {
    const id = patient.id;
    const username = patient.username_fk;

    const deletedPatient = await deletePatientWithPrisma(id, username);

    res.status(200).json(deletedPatient);

  } catch (error) {
    
    console.log(error)
    res.status(500).json({ msg: 'Deu erro'})
  }
}
