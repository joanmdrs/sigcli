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
recepcionistRoutes.post("/", registerRecepcionist);

recepcionistRoutes.get("/", listRecepcionist);

recepcionistRoutes.get("/:cpf", getRecepcionistByCPF);

recepcionistRoutes.put("/:id", updateRecepcionist);

recepcionistRoutes.delete("/:id", deleteRecepcionist);
