import { Role } from "@prisma/client";
import { createUser } from "../repositories/userRepository.js";

export const registerUser = async (req, res) => {
    const {username, password, role} = req.body;

    console.log(username);
    const userBody = { username, password, role};
    const user = await createUser(userBody);
    res.status(200).json(user);
}