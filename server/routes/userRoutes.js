import { Router } from "express";
import { getUserByUsername, registerUser, removeUser } from "../controllers/userController.js";
export const userRoutes = Router();

userRoutes.post("/", registerUser);
userRoutes.get("/:username", getUserByUsername);
userRoutes.delete("/:username", removeUser);