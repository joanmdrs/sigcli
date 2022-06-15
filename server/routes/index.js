import { Router } from "express";
import { recepcionistRoutes } from "./recepcionistRoutes.js";
import { patientRoutes } from "./patientRoutes.js";
import { doctorRoutes } from "./doctorRoutes.js";
import { examRoutes } from "./examRoutes.js";
import { appointmentRoutes } from "./appointmentsRoutes.js";
import { auth } from "./auth.js";
export const apiRoutes = Router();

<<<<<<< HEAD
apiRoutes.use("/doctor", doctorRoutes);
apiRoutes.use("/recepcionist", recepcionistRoutes);
apiRoutes.use("/patient", patientRoutes);
apiRoutes.use("/exam", examRoutes);
apiRoutes.use("/appointment", appointmentRoutes);
apiRoutes.use("/auth", auth);
=======
apiRoutes.use("/doctors", doctorRoutes);
apiRoutes.use("/recepcionists", recepcionistRoutes);
apiRoutes.use("/patients", patientRoutes);
apiRoutes.use("/exams", examRoutes);
apiRoutes.use("/appointments", appointmentRoutes);
>>>>>>> main
