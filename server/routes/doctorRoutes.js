import { Router } from "express";
import { registerDoctor } from "../controllers/doctorController.js";

export const doctorRoutes = Router();

doctorRoutes.post("/register", registerDoctor);
