import { prisma } from "../service/prisma.js";

export const createRecepcionist = async (recepcionist, user) => {
  return await prisma.$transaction([
    prisma.user.create({
      data: user,
    }),
    prisma.recepcionist.create({
      data: recepcionist,
    })
  ]);
};


export const listRecepcionistWithPrisma = async () => {
  return await prisma.recepcionist.findMany();
};


export const findUniqueByCPFRecepcionist = async (cpf) => {
  return await prisma.recepcionist.findUnique({
    where: {
      cpf: cpf,
    },
  });
};

export const updateRecepcionistWithPrisma = async (recepcionist, id) => {
  return await prisma.recepcionist.update({
    where: {
      id: Number(id),
    },
    data: recepcionist
  });
};

export const deleteRecepcionistWithPrisma = async (id, username) => {
  return await prisma.$transaction([
    prisma.recepcionist.delete({
      where: {
        id: Number(id)
      }
    }),
    prisma.user.delete({
      where: {
        username: String(username),
      }
    })


  ])
};
