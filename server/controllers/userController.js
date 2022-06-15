import { createUser } from "../repositories/userRepository.js";
import { hashPassword } from "../service/cryptoService.js";

export const registerUser = async (req, res) => {
    const {username, password, role} = req.body;

    const userBody = { 
        username: username.trim(), 
        password: hashPassword(password), 
        role};
    const user = await createUser(userBody);
    res.status(200).json(user);
}