import { prisma } from "../service/prisma.js";

export const createExam = async (exam) => {
    return await prisma.exam.create({
        data : exam,
    });
    
}

export const listExamWithPrisma = async () => {
    return await prisma.exam.findMany();
};


export const updateExamWithPrisma = async (exam) => {
 
  const {id, title, description, patient_fk, doctor_fk} = exam;
  return await prisma.exam.update({
    where: {
      id: Number(id),
    },
    data: {
        title, 
        description,
        patient_fk,
        doctor_fk,
    },
  });
};

export const deleteExamWithPrisma = async (examID) => {
  return await prisma.exam.delete({
    where: {
      id: Number(examID),
    },
  });
};
