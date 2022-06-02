import { Router } from "express";
import {
  registerRecepcionist,
  deleteRecepcionist,
  updateRecepcionist,
  listRecepcionist,
} from "../controllers/recepcionistController.js";
export const recepcionistRoutes = Router();

// /recepcionist/register
recepcionistRoutes.post("/register", registerRecepcionist);

recepcionistRoutes.get("/getAll", listRecepcionist);

recepcionistRoutes.put("/update", updateRecepcionist);

recepcionistRoutes.delete("/:id", deleteRecepcionist);
