import { Role } from "@prisma/client";
import jwt, { decode } from "jsonwebtoken";

export const verifyToken = (req, res, next) => {

  const token = req.headers.authorization.split(' ')[1];// Capturando o cabeçalho de autenticação com o token
  if (!token) return res.status(401).json({ msg: "Acesso negado!" });
  

  const secret = process.env.JWT_SECRET;
  try {
    jwt.verify(token, secret);
    const decoded = jwt.decode(token);

    req.body = decoded; 
    console.log(decoded);
    return next();
  } catch (err) {
    res.status(400).json({ msg: "O Token é inválido!" });
  }
};

export const verifyAuthorization = (req, res) => {
  // Verifica se o usuário possui permissão
  const {user} = req.body;
  console.log(user);
  try {
    
    if(user.role == "ADMIN" || user.role == "RECEPCIONIST") {
      res.status(200).json({msg: "Usuário possui autorização de acesso"});
    } else {
      res.status(401).json({msg: "Usuário não possui autorização de acesso"});
    }
  } catch (error) {
    res.status(500).json({msg: "deu merda."});
  }
  
    
}
