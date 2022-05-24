import { Router } from "express";
import { recepcionistRoutes } from "./recepcionistRoutes.js";
import { doctorRoutes } from "./doctorRoutes.js";
export const apiRoutes = Router();

apiRoutes.use("/recepcionist", recepcionistRoutes);
apiRoutes.use("/doctor", doctorRoutes);
