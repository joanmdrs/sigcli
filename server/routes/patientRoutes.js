import { Router } from "express";
import {
  registerPatient,
  listPatients,
  updatePatient,
  deletePatient,
} from "../controllers/patientController";

export const patientRoutes = Router();

// /recepcionist/register
patientRoutes.post("/register", registerPatient);

patientRoutes.get("/getAll", listPatients);

patientRoutes.put("/update", updatePatient);

patientRoutes.delete("/:cpf", deletePatient);
