import { Router } from "express";
import {
    registerDoctor,
    getDoctors
} from "../controllers/doctorController.js";

export const doctorRoutes = Router();

doctorRoutes.post("/register", registerDoctor);
doctorRoutes.get("/getAll", getDoctors);
