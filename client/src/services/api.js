import axios from "axios";

let storedToken = localStorage.getItem('token');
let token

storedToken !== null ? token = storedToken.substring(1, storedToken.length - 1) : token = null

const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {'Authorization': 'Bearer '+ token}
});

export default api;