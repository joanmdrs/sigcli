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
<<<<<<< HEAD
patientRoutes.post("/register", registerPatient);

patientRoutes.get("/getAll", verifyJwtRecepcionist, listPatients);
=======
patientRoutes.post('/', registerPatient)

patientRoutes.get('/', listPatients)
>>>>>>> main

patientRoutes.get("/:cpf", getPatientByCPF);

<<<<<<< HEAD
patientRoutes.put("/update", updatePatient);
=======
patientRoutes.put('/:id', updatePatient)
>>>>>>> main

patientRoutes.delete("/:id", deletePatient);
