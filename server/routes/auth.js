import { response, Router } from "express";
import jwt from "jsonwebtoken";
import { findUniqueUserByUsername } from "../repositories/userRepository.js";
import { comparePassword } from "../service/cryptoService.js";
export const auth = Router();

auth.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await findUniqueUserByUsername(username);

  try {

    if(user == undefined) {
      res.status(404).json({msg: 'Usuário não encontrado.'});
     

    } else {


        if(comparePassword(password, user.password)){
          try {
            const secret = process.env.JWT_SECRET;
            const token = jwt.sign({ user }, secret, { expiresIn: "1h" });
            return res.status(200).json({msg: "Usuário autenticado", token});       

          } catch (error) {
            res.status(500).json({ msg: "Usuário não autenticado" });
          }

        }else {
          res.status(401).json({ msg: "Credenciais inválidas."})
        }
    }
  } catch (error) {

    res.status(500).json({ msg: 'Ocorreu um erro no servidor.' });
  }

});
