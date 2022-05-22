import { prisma } from "../service/prisma.js";

export const createExam = async (exam) => {
  console.log("Estou em Repository:", exam);
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
