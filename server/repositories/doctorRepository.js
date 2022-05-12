import { prisma } from "../service/prisma.js";

export const createDoctor = async (doctor) => {
    return await prisma.doctor.create({
      data: doctor,
    });
};

export const findManyDoctors = async () => {
  return await prisma.doctor.findMany();
};
