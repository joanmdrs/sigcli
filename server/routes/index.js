import { Router } from "express";
import { recepcionistRoutes } from "./recepcionistRoutes.js";
import { patientRoutes } from "./patientRoutes.js";
import { doctorRoutes } from "./doctorRoutes.js";
import { examRoutes } from "./examRoutes.js";
export const apiRoutes = Router();

apiRoutes.use("/doctor", doctorRoutes);
apiRoutes.use("/recepcionist", recepcionistRoutes);
apiRoutes.use("/patient", patientRoutes);
apiRoutes.use("/exam", examRoutes);
