import {
  createPatient,
  listPatient,
  updatePatientWithPrisma,
  deletePatientWithPrisma
} from '../repositories/patientRepository.js'

export const registerPatient = async (req, res) => {
  const patientBody = req.body

  const patient = await createPatient(patientBody)
  res.json(patient)
}

export const listPatients = async (req, res) => {
  const listPatients = await listPatient()
  return res.status(200).json(listPatients)
}

export const updatePatient = async (req, res) => {
  const patient = req.body
  const updatedPatient = await updatePatientWithPrisma(patient)
  res.json(updatedPatient)
}

export const deletePatient = async (req, res) => {
  const cpf = req.params.cpf
  const deletedPatient = await deletePatientWithPrisma(cpf)
  res.json(deletedPatient)
}
