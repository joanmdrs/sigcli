import {
  createPatient,
  listPatient,
  findUniqueByCPFPatient,
  updatePatientWithPrisma,
  deletePatientWithPrisma
} from '../repositories/patientRepository.js'

export const registerPatient = async (req, res) => {
  const {name, cpf, phone, email, username, password} = req.body

  const patientBody = {
    name: name,
    cpf: cpf,
    phone: phone,
    email: email,
    username: username,
    password: password
  }
  const patient = await createPatient(patientBody)
  res.json(patient)
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
