import axios from "axios";

let token = localStorage.getItem('token');
token = token.substring(1, token.length - 1);

const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {'Authorization': 'Bearer '+ token}
});

export default api;