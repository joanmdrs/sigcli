import { Router } from "express";
import {
    registerExam,
    listExam,
    updateExam,
    deleteExam
} from "../controllers/examController.js"

export const examRoutes = Router();

// /recepcionist/register
examRoutes.post("/", registerExam);

examRoutes.get("/", listExam);

examRoutes.put("/:id", updateExam);

examRoutes.delete("/:id", deleteExam);
