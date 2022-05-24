import { Router } from "express";
import { recepcionistRoutes } from "./recepcionistRoutes.js";
import { patientRoutes } from "./patientRoutes.js";
import { doctorRoutes } from "./doctorRoutes.js";
export const apiRoutes = Router();

apiRoutes.use("/doctor", doctorRoutes);
apiRoutes.use("/recepcionist", recepcionistRoutes);
apiRoutes.use("/patient", patientRoutes);

