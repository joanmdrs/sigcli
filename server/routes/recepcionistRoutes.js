import { Router } from "express";
import {
  registerRecepcionist,
  listRecepcionist,
  getRecepcionistById,
  updateRecepcionist,
  deleteRecepcionist
} from "../controllers/recepcionistController.js";

export const recepcionistRoutes = Router();

// /recepcionist/register
recepcionistRoutes.post("/register", registerRecepcionist);

recepcionistRoutes.get("/getAll", listRecepcionist);

recepcionistRoutes.get("/get/:id", getRecepcionistById);

recepcionistRoutes.put("/update", updateRecepcionist);

recepcionistRoutes.delete("/delete/:id", deleteRecepcionist);
