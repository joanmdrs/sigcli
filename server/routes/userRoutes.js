import { Router } from "express";
import { registerUser } from "../controllers/userController.js";
export const userRoutes = Router();

userRoutes.post("/", registerUser);