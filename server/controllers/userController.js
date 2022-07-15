import { createUser, deleteUser, findUniqueUserByUsername } from "../repositories/userRepository.js";
import { hashPassword } from "../service/cryptoService.js";

export const registerUser = async (req, res) => {
    const {username, password, role} = req.body;

    try {
        const userBody = { 
            username: username.trim(), 
            password: hashPassword(password), 
            role
        };
        const user = await createUser(userBody);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({msg: "Ocorreu um erro no servidor."});
    }
    
}


export const getUserByUsername = async (req, res) => {
    const {username} = req.params;

    try {
        const user = await findUniqueUserByUsername(username);
        if(user == undefined) {
            res.status(404).json({msg: 'Usuário não encontrado.'});
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json({ msg: 'Ocorreu um erro no servidor.' });
    }
}

export const removeUser = async (req, res) => {
    const {username} = req.params;

    try {

        const userDeleted = await deleteUser(username);
        res.status(200).json({msg: "Usuário excluído com sucesso.", userDeleted});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Não foi possível excluir o usuário."});
    }
}