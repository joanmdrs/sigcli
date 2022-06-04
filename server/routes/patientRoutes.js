import { Router } from 'express'
import {
  registerPatient,
  listPatients,
  getPatientByID,
  updatePatient,
  deletePatient
} from '../controllers/patientController.js'

export const patientRoutes = Router()

// /recepcionist/register
patientRoutes.post('/', registerPatient)

patientRoutes.get('/', listPatients)

patientRoutes.get("/:id", getPatientByID);

patientRoutes.put('/:id', updatePatient)

patientRoutes.delete('/:id', deletePatient)
