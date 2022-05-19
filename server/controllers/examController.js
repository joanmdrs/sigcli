import {
    createExam,
    listExamWithPrisma,
    updateExamWithPrisma,
    deleteExamWithPrisma
} from "../repositories/examRepository.js";


export const registerExam = async (req, res) => {
    const examBody = req.body;
    const exam = await createExam(examBody)
    res.json(exam);
};

export const listExam = async (req, res) => {
    const examList = await listExamWithPrisma();
    res.status(200).json(examList);
};


export const updateExam = async (req, res) => {
    const examBody = req.body;
    const updatedExam = await updateExamWithPrisma(examBody);
    res.json(updatedExam);
};

export const deleteExam = async (req, res) => {
    const id = req.params.id;
    const deletedExam = await deleteExamWithPrisma(id);
    res.json(deletedExam);
};
