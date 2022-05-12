import { prisma } from "../service/prisma.js";

export const createDoctor = async (doctor) => {
    return await prisma.doctor.create({
      data: doctor,
    });
};

export const findManyDoctors = async () => {
  return await prisma.doctor.findMany();
};

export const updateDoctorWithPrisma = async (doctor) => {
  const { id, name, crm, username, password } = doctor;
  return await prisma.doctor.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      crm,
      username,
      password,
    },
  });
};
