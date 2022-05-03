import { prisma, disconnectDB } from "./service/prisma.js";
import express from 'express'


import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async(req, res) => {
  const {name, username, password} = req.body;

  const recepcionist = await prisma.recepcionist.create({
    data: {
      name: name,
      username: username,
      password: password
    },
  });
  res.json(recepcionist);
});

app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001");
})

app.get("/get/:id", async(req, res) => {
  const { id } = req.params;
  const recepcionist = await prisma.recepcionist.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return res.status(200).json(recepcionist);
})

app.get("/get/user/:username", async(req, res) => {
  const { username } = req.params;
  const recepcionist = await prisma.recepcionist.findUnique({
    where: {
      username: username,
    },
  });
  return res.status(200).json(recepcionist);
})

app.put("/update", async (req, res) => {
  const {id, name, username, password} = req.body;
  const updateRecepcionist = await prisma.recepcionist.update({
      where: {
          id: Number(id),
      },
      data: {
          name: name,
          username: username,
          password: password,
      },
  });
  res.json(updateRecepcionist);
});



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
