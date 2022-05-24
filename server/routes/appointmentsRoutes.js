import { Router } from "express";
import {
    registerAppointment,
    listAppointment,
    updateAppointment,
    deleteAppointment
} from "../controllers/appointmentController"

export const appointmentRoutes = Router();

// /recepcionist/register
appointmentRoutes.post("/register", registerAppointment);

appointmentRoutes.get("/getAll", listAppointment);

appointmentRoutes.put("/update", updateAppointment);

appointmentRoutes.delete("/:id", deleteAppointment);