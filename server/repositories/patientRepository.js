import { prisma } from "../service/prisma.js";

export const createPatient = async (patient) => {
  return await prisma.patient.create({
    data: patient,
  });
};

export const listPatient = async () => {
  return await prisma.patient.findMany();
};

export const updatePatientWithPrisma = async (patient) => {
  const { id, name, cpf, phone, email, username, password } = patient;
  return await prisma.patient.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      cpf,
      phone,
      email,
      username,
      password,
    },
  });
};

export const deletePatientWithPrisma = async (patientCPF) => {
  return await prisma.patient.delete({
    where: {
      cpf: patientCPF,
    },
  });
};
