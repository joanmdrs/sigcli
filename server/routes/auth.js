import { Router } from "express";
import jwt from "jsonwebtoken";
export const auth = Router();

auth.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Verifica se existe um usuário com o username e password
  if (username == "felipe" && password == "123") {
    // Logar
    try {
      const token = jwt.sign({ username }, "123", { expiresIn: 1 });
      return res
        .status(200)
        .json({ msg: "Autenticação realizada com sucesso", token });
    } catch (error) {
      return res.status(500).json({ msg: error });
    }
  }

  return res.status(404).json({ msg: "Não existe" });
  // Retornar 404
});
