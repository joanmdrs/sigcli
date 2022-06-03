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
recepcionistRoutes.post("/", registerRecepcionist);

recepcionistRoutes.get("/", listRecepcionist);

recepcionistRoutes.get("/get/:id", getRecepcionistById);

recepcionistRoutes.put("/:id", updateRecepcionist);

recepcionistRoutes.delete("/delete/:id", deleteRecepcionist);
