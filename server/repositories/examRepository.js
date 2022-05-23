import { prisma } from "../service/prisma.js";

export const createExam = async (exam) => {
    return await prisma.exam.create({
        data : {
          title: String(exam.title),
          patient_cpf: String(exam.patient_cpf),
          patient_name: String(exam.patient_name),
          crm_doctor: String(exam.crm_doctor),
          doctor_name: String(exam.doctor_name),
          description: String(exam.description)   
        }
    });
    
}

export const listExamWithPrisma = async () => {
    return await prisma.exam.findMany();
};


export const updateExamWithPrisma = async (exam) => {
  const { id, title, patient_cpf, patient_name, crm_doctor, doctor_name, description } = exam;
  return await prisma.exam.update({
    where: {
      id: Number(id),
    },
    data: {
        title, 
        patient_cpf, 
        patient_name, 
        crm_doctor, 
        doctor_name,
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
