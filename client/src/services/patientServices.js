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
    return response.data;
  })
}

// export const filterPatient = (props) => {
//   return 
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
  }).then((response) => {
    return response;
  });
}

export const removePatient = (props) => {
  api.delete(`/patient/${props.cpf}`);
}