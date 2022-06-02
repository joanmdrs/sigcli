import { prisma } from "../service/prisma.js";

export const createRecepcionist = async (recepcionist) => {
  return await prisma.recepcionist.create({
    data: recepcionist,
  });
};


export const listRecepcionistWithPrisma = async () => {
  return await prisma.recepcionist.findMany();
};


export const findUniqueByIdRecepcionist = async (id) => {
  return await prisma.recepcionist.findUnique({
    where: {
      id: Number(id),
    },
  });
};

export const updateRecepcionistWithPrisma = async (recepcionist) => {
  const { id, name, username, password } = recepcionist;
  return await prisma.recepcionist.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      username,
      password,
    },
  });
};

export const deleteRecepcionistWithPrisma = async (recepcionistID) => {
  return await prisma.recepcionist.delete({
    where: {
      id: Number(recepcionistID),
    },
  });
};
