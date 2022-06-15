import { Router } from "express";
import {
  registerPatient,
  listPatients,
  getPatientByCPF,
  updatePatient,
  deletePatient,
} from "../controllers/patientController.js";

import { verifyJwtRecepcionist } from "../service/middlewares/recepcionist.middleware.js";

export const patientRoutes = Router();

// /recepcionist/register
patientRoutes.post("/register", registerPatient);

patientRoutes.get("/getAll", verifyJwtRecepcionist, listPatients);

patientRoutes.get("/:cpf", getPatientByCPF);

patientRoutes.put('/:id', updatePatient);

patientRoutes.delete("/:id", deletePatient);
