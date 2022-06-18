import { Router } from "express";
import {
    registerDoctor,
    getDoctors,
    updateDoctor,
    deleteDoctor,
    getDoctorByCrm,
} from "../controllers/doctorController.js";

export const doctorRoutes = Router();

doctorRoutes.post("/", registerDoctor);
doctorRoutes.get("/", getDoctors);
doctorRoutes.get("/:crm", getDoctorByCrm);
doctorRoutes.put("/:id", updateDoctor);
doctorRoutes.delete("/:id", deleteDoctor);
