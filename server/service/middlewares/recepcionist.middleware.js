import jwt from "jsonwebtoken";
export const verifyJwtRecepcionist = (req, res, next) => {
  const token = req.headers["authorization"]; // Capturando o cabeçalho de autenticação com o token

  if (!token) return res.status(401).json({ msg: "Acesso negado!" });

  try {
    jwt.verify(token, "123");

    return next();
  } catch (err) {
    res.status(400).json({ msg: "O Token é inválido!" });
  }
};
