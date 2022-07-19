import { Router } from "express";
import {
  registerRecepcionist,
  listRecepcionist,
  getRecepcionistByCPF,
  updateRecepcionist,
  deleteRecepcionist
} from "../controllers/recepcionistController.js";

export const recepcionistRoutes = Router();

// /recepcionist/register
recepcionistRoutes.post("/register", registerRecepcionist);

recepcionistRoutes.get("/getAll", listRecepcionist);

recepcionistRoutes.get("/:cpf", getRecepcionistByCPF);

recepcionistRoutes.put("/:id", updateRecepcionist);

recepcionistRoutes.delete("/:cpf", deleteRecepcionist);
