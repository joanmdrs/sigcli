import { Router } from "express";
import { recepcionistRoutes } from "./recepcionistRoutes.js";
import { appointmentsRoutes } from "./appointmentsRoutes.js";
export const apiRoutes = Router();

apiRoutes.use("/recepcionist", recepcionistRoutes);
apiRoutes.use("/appointment", appointmentsRoutes);
