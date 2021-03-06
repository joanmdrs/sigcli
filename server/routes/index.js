import { Router } from "express";
import { recepcionistRoutes } from "./recepcionistRoutes.js";
import { patientRoutes } from "./patientRoutes.js";
import { doctorRoutes } from "./doctorRoutes.js";
import { examRoutes } from "./examRoutes.js";
import { appointmentRoutes } from "./appointmentsRoutes.js";
import { userRoutes } from "./userRoutes.js";
import { auth } from "./auth.js";
export const apiRoutes = Router();

apiRoutes.use("/doctors", doctorRoutes);
apiRoutes.use("/recepcionists", recepcionistRoutes);
apiRoutes.use("/patients", patientRoutes);
apiRoutes.use("/exams", examRoutes);
apiRoutes.use("/appointments", appointmentRoutes);
apiRoutes.use("/auth", auth);
apiRoutes.use("/users", userRoutes);