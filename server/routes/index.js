import { Router } from "express";
import { recepcionistRoutes } from "./recepcionistRoutes.js";
import { patientRoutes } from "./patientRoutes.js";
export const apiRoutes = Router();

apiRoutes.use("/recepcionist", recepcionistRoutes);
apiRoutes.use("/patient", patientRoutes);

