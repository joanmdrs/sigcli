import { prisma } from "../service/prisma.js";

export const createPatient = async (patient) => {
  
  return await prisma.patient.create({
    data: patient,
  });
};

export const listPatient = async () => {
  return await prisma.patient.findMany();
};

export const findUniqueByCPFPatient = async (cpf) => {
  return await prisma.patient.findUnique({
    where: {
      cpf: cpf,
    },
  });
};

export const updatePatientWithPrisma = async (patient, idReceived) => {
  //const { name, cpf, phone, email, username, password } = patient;
  return await prisma.patient.update({
    where: {
      id: Number(idReceived),
    },
    data: patient
  });
};

export const deletePatientWithPrisma = async (patientID) => {
  return await prisma.patient.delete({
    where: {
      id: Number(patientID),
    },
  });
};
