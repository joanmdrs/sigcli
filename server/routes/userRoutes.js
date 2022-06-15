import { Router } from "express";
import { getUserByUsername, registerUser } from "../controllers/userController.js";
export const userRoutes = Router();

userRoutes.post("/", registerUser);
userRoutes.get("/:username", getUserByUsername);