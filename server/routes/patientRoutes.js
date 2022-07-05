import { Router } from "express";
import {
  registerPatient,
  listPatients,
  getPatientByCPF,
  updatePatient,
  deletePatient,
} from "../controllers/patientController.js";

import { verifyToken, verifyAuthorization } from "../service/middlewares/recepcionist.middleware.js";

export const patientRoutes = Router();

// /recepcionist/register
patientRoutes.post("/register", registerPatient);

patientRoutes.get("/getAll", listPatients);

patientRoutes.get("/:cpf", getPatientByCPF);

patientRoutes.put('/:id', updatePatient);

patientRoutes.delete("/:cpf", deletePatient);
