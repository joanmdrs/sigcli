import { Router } from 'express'
import {
  registerPatient,
  listPatients,
  getPatientByCPF,
  updatePatient,
  deletePatient
} from '../controllers/patientController.js'

export const patientRoutes = Router()

// /recepcionist/register
patientRoutes.post('/', registerPatient)

patientRoutes.get('/', listPatients)

patientRoutes.get("/:cpf", getPatientByCPF);

patientRoutes.put('/:id', updatePatient)

patientRoutes.delete('/:id', deletePatient)
