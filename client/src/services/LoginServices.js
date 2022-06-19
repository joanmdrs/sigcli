import api from "./api";

export const signIn = async () => {
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const response = await api.post("/auth/login", {
        username: username,
        password: password
    });

    return response;

}

export const persistToken = (token) => {
    localStorage.setItem('token', JSON.stringify(token));

}

export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if(token) {
        return true;
    }
    return false;

}

export const hasAuthorization = (user) => {
    if(user.role == "ADMIN" || user.role == "RECEPCIONIST"){
        return true;
    }
    return false;

}