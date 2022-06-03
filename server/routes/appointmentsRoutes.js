import { Router } from "express";
import {
    registerAppointment,
    listAppointment,
    updateAppointment,
    deleteAppointment
} from "../controllers/appointmentController.js"

export const appointmentRoutes = Router();

// /appointment/register
appointmentRoutes.post("/", registerAppointment);

appointmentRoutes.get("/", listAppointment);

appointmentRoutes.put("/:id", updateAppointment);

appointmentRoutes.delete("/:id", deleteAppointment);