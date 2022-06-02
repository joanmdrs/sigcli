import {
  createRecepcionist,
  deleteRecepcionistWithPrisma,
  findUniqueByIDRecepcionist,
  findUniqueByUsernameRecepcionist,
  listRecepcionistWithPrisma,
  updateRecepcionistWithPrisma,
} from "../repositories/recepcionistRepository.js";


export const registerRecepcionist = async (req, res) => {
  const recepcionistBody = req.body;

  const recepcionist = await createRecepcionist(recepcionistBody);
  res.json(recepcionist);
};

export const listRecepcionist = async (req, res) => {
  const recepcionistList = await listRecepcionistWithPrisma();
  res.status(200).json(recepcionistList);
};


export const updateRecepcionist = async (req, res) => {
  const recepcionist = req.body;
  const updatedRecepcionist = await updateRecepcionistWithPrisma(recepcionist);
  res.json(updatedRecepcionist);
};

export const deleteRecepcionist = async (req, res) => {
  const id = req.params.id;
  const deletedRecepcionist = await deleteRecepcionistWithPrisma(id);
  res.json(deletedRecepcionist);
};
