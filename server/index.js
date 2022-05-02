import { prisma, disconnectDB } from "./service/prisma.js";

async function getAll() {
  const all = await prisma.recepcionist.findMany();
  console.log("All:", all);
}

getAll()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await disconnectDB();
  });
