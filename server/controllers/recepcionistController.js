import {
  createRecepcionist,
  listRecepcionistWithPrisma,
  findUniqueByCPFRecepcionist,
  deleteRecepcionistWithPrisma,
  updateRecepcionistWithPrisma,
} from "../repositories/recepcionistRepository.js";

import { hashPassword } from '../service/cryptoService.js'
import { validateCPF, validatePhone } from '../service/validations.js'


export const registerRecepcionist = async (req, res) => {
  const { name, cpf, phone, email, username, password } = req.body

  if (!validateCPF(cpf)) {
    return res.status(406).json({ msg: 'CPF Inválido!' })
  }

  if (!validatePhone(phone)) {
    return res.status(406).json({ msg: 'Telefone Inválido!' })
  }

  try {
    const userBody = { 
      username: username.trim(), 
      password: hashPassword(password), 
      role: "RECEPCIONIST"
    };

    const recepcionistBody = {
      name: name, 
      cpf: cpf, 
      phone: phone,
      email: email,
      username_fk: String(username)
    }
    const recepcionistCreated = await createRecepcionist(recepcionistBody, userBody)
    res.status(200).json(recepcionistCreated)
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Error no servidor! Procure o administrador!' })
  }
};

export const listRecepcionist = async (req, res) => {
  

  try {
    const listRecepcionists = await listRecepcionistWithPrisma();
    
    if (listRecepcionists.length === 0) {
      res.status(404).json({ msg: 'Não existe recepcionistas cadastrados!' })
    } else {
      res.status(200).json(listRecepcionists)
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Error no servidor! Procure o administrador!' })
  }
};

export const getRecepcionistByCPF = async (req, res) => {
  const { cpf } = req.params;

  try {
    const recepcionist = await findUniqueByCPFRecepcionist(cpf)

    if(recepcionist === undefined){
      res.status(404).json({ msg: 'Recepcionista não encontrado.'})
    } 

    res.status(200).json(recepcionist)
    
  } catch (error) {
    res.status(500).json({ msg: 'Error no servidor! Procure o administrador!' })
  }
 
}

export const updateRecepcionist = async (req, res) => {
  const id = req.params.id
  const { name, cpf, phone, email } = req.body

  if (!validateCPF(cpf)) {
    return res.status(406).json({ msg: 'CPF inválido!' })
  }

  if (!validatePhone(phone)) {
    return res.status(406).json({ msg: 'Telefone Inválido!' })
  }

  try {

    const recepcionistBody = {
      name: name.trim(),
      cpf: cpf.trim(),
      phone: phone.trim(),
      email: email.trim(),
    }

    const updatedRecepcionist = await updateRecepcionistWithPrisma(recepcionistBody,id)
    res.status(200).json(updatedRecepcionist);

  } catch (error) {

    console.log(error);
    res.status(500).json({ msg: 'Error no servidor! Procure o administrador!' })
  }
};

export const deleteRecepcionist = async (req, res) => {
  const cpfReceived = req.params.cpf;
  const recepcionist = await findUniqueByCPFRecepcionist(cpfReceived);

  if (recepcionist === null || recepcionist === undefined)  {
    return res.status(500)
              .json({msg: "Erro no servidor, não foi possível encontrar o paciente"})
  }

  try {
    const id = recepcionist.id;
    const username = recepcionist.username_fk;

    const deletedRecepcionist = await deleteRecepcionistWithPrisma(id, username);

    res.status(200).json(deletedRecepcionist);

  } catch (error) {
    
    console.log(error)
    res.status(500).json({ msg: 'Deu erro'})
  }
};
