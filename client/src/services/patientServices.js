import api from "./api";

export const createPatient = (props) => {
  api.post("/patient/register", {
    name: props.name,
    cpf: props.cpf,
    phone: props.phone,
    email: props.email,
    username: props.username,
    password: props.password,
  });
}

export const listPatients = () => {
  api.get("/patient/getAll").then((response) => {
    return (response.data);
  })
}

// export const filterPatient = (cpf) => {
//   api.get(`/patient/get/${cpf}`).then((response) => {
//     return (response.data);
//   })
// }

export const editPatient = (props) => {
  api.put("/patient/update", {
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
  api.delete(`/patient/${id}`);
}