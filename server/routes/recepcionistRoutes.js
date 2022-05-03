import { Router } from "express";
import {
  registerRecepcionist,
  deleteRecepcionist,
  getByIdRecepcionist,
  getByUsernameRecepcionist,
  updateRecepcionist,
} from "../controllers/recepcionistController.js";
export const recepcionistRoutes = Router();

// /recepcionist/register
recepcionistRoutes.post("/register", registerRecepcionist);

recepcionistRoutes.get("/get/:id", getByIdRecepcionist);

recepcionistRoutes.get("/get/user/:username", getByUsernameRecepcionist);

recepcionistRoutes.put("/update", updateRecepcionist);

recepcionistRoutes.delete("/:id", deleteRecepcionist);
