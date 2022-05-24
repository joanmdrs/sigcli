import { Router } from "express";
import {
    registerDoctor,
    getDoctors,
    updateDoctor,
    deleteDoctor,
} from "../controllers/doctorController.js";

export const doctorRoutes = Router();

doctorRoutes.post("/register", registerDoctor);
doctorRoutes.get("/getAll", getDoctors);
doctorRoutes.put("/update", updateDoctor);
doctorRoutes.delete("/delete/:id", deleteDoctor);
