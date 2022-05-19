import { Router } from "express";
import {
    registerExam,
    listExam,
    updateExam,
    deleteExam
} from "../controllers/examController.js"

export const examRoutes = Router();

// /recepcionist/register
examRoutes.post("/register", registerExam);

examRoutes.get("/getAll", listExam);

examRoutes.put("/update", updateExam);

examRoutes.delete("/:id", deleteExam);
