import jwt, { decode } from "jsonwebtoken";

export const verifyToken = (req, res, next) => {

  const token = (req.headers.authorization.split(' ')[1])
  
  if (!token) return res.status(401).json({ msg: "Acesso negado!" });
  
  const secret = process.env.JWT_SECRET;
  try {
  
    jwt.verify(token, secret);
    const decoded = decode(token);

    req.body = decoded; 
    next();

  } catch (error) {
    res.status(400).json({ msg: "O Token é inválido!" });
  }
};

export const verifyAuthorization = (req, res, next) => {

  const {user} = req.body;
  
  try {
    
    if(user.role == "ADMIN" || user.role == "RECEPCIONIST") {
      next();
    } else {
      res.status(401).json({msg: "Usuário não possui autorização de acesso"});
    }
  } catch (error) {
    res.status(500).json({msg: "deu merda."});
  }
  
    
}
