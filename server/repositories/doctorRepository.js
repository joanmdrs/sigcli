import { prisma } from "../service/prisma.js";

export const createDoctor = async (doctor) => {
    return await prisma.doctor.create({
      data: doctor,
    });
};

export const findUniqueByCrmDoctor = async (crm) => {
  return await prisma.doctor.findUnique({
    where: {
      crm,
    },
  });
};

export const findManyDoctors = async () => {
  return await prisma.doctor.findMany();
};

export const updateDoctorWithPrisma = async (doctor) => {
  const { id, name, crm, phone, email, username, password } = doctor;
  return await prisma.doctor.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      crm,
      phone, 
      email,
      username,
      password,
    },
  });
};

export const deleteDoctorWithPrisma = async (doctorID) => {
  return await prisma.doctor.delete({
    where: {
      id: Number(doctorID),
    },
  });
};
