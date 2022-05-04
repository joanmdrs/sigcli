import { Router } from "express";
import { recepcionistRoutes } from "./recepcionistRoutes.js";
export const apiRoutes = Router();

apiRoutes.use("/recepcionist", recepcionistRoutes);
