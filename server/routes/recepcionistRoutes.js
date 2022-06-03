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
recepcionistRoutes.post("/", registerRecepcionist);

recepcionistRoutes.get("/:id", getByIdRecepcionist);

recepcionistRoutes.get("/get/user/:username", getByUsernameRecepcionist);

recepcionistRoutes.put("/:id", updateRecepcionist);

recepcionistRoutes.delete("/:id", deleteRecepcionist);
