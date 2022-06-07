import api from "./api";

export const createPatient = (props) => {
  api.post("/patients", {
    name: props.name,
    cpf: props.cpf,
    phone: props.phone,
    email: props.email,
    username: props.username,
    password: props.password,
  });
}

export const listPatients = async () => {
  const res = await api.get("/patients");
  const data = res.data;    
  return JSON.stringify(data);
}


export const editPatient = (props) => {
  api.put(`/patients/${props.id}`, {
    id: props.id,
    name: props.name,
    cpf: props.cpf,
    phone: props.phone,
    email: props.email,
    username: props.username,
    password: props.password,
  })
}

export const removePatient = (id) => {
  api.delete(`/patients/${id}`);
}