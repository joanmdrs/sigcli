import { prisma } from "../service/prisma.js";

export const createUser = async (user) => {
    return await prisma.user.create({
      data: user,
    });
};


export const findUniqueUserByUsername= async (username) => {
  return await prisma.user.findUnique({
    where: {
      username: username,
    }
  })
};

export const deleteUser = async (username) => {
  return await prisma.user.delete({
    where: {
      username: username,
    }
  })
}