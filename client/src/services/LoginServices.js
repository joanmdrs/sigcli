import api from "./api";


export const signIn = async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const response = await api.post("/auth/login", {
        username: username,
        password: password
    });

    localStorage.setItem('token', JSON.stringify(response.data));
    console.log(response);
}

export const isAuthenticate = () => {
    const token = localStorage.getItem('token');
}