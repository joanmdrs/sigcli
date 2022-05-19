import { Router } from "express";
import { recepcionistRoutes } from "./recepcionistRoutes.js";
import { examRoutes } from "./examRoutes.js";
export const apiRoutes = Router();

apiRoutes.use("/recepcionist", recepcionistRoutes);
apiRoutes.use("/exam", examRoutes);
