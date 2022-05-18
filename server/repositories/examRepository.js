import { prisma } from "../service/prisma.js";

export const createExam = async (exam) => {
    return await prisma.exam.create({
        data: exam
    });
}

export const listExams = async () => {
    return await prisma.exam.findMany();
}


export const updateExamWithPrisma = async (exam) => {
  const { id, title, cpf_hash_patient, crm_doctor, description } = exam;
  return await prisma.exam.update({
    where: {
      id: Number(id),
    },
    data: {
        title, 
        cpf_hash_patient, 
        crm_doctor, 
        description
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
