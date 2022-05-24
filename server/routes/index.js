import { Router } from "express";
import { recepcionistRoutes } from "./recepcionistRoutes.js";
import { appointmentRoutes } from "./appointmentsRoutes.js";
export const apiRoutes = Router();

apiRoutes.use("/recepcionist", recepcionistRoutes);
apiRoutes.use("/appointment", appointmentRoutes);
