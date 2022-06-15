import { prisma } from "../service/prisma.js";

export const createUser = async (user) => {
    return await prisma.user.create({
      data: user,
    });
};
  