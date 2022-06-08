import api from "./api";
import Swal from "sweetalert2";
export const createPatient = (props) => {
  let response = api.post("/patients", {
    name: props.name,
    cpf: props.cpf,
    phone: props.phone,
    email: props.email,
    username: props.username,
    password: props.password,
  });
  return response;
}

export const messageSucess = (message) => {
  Swal.fire({
    title: "Success",
    text: message,
    icon: "success",
    showCancelButton: false,
    confirmButtonColor: "#0C6170",
    confirmButtonText: "Ok",
  }).then((result) => {
    if (result.isConfirmed) {
      document.location.reload();
    }
  });
};

export const messageFailure = (message) => {
  Swal.fire({
    title: "Failure",
    text: message,
    icon: "error",
    showCancelButton: false,
    confirmButtonColor: "#0C6170",
    confirmButtonText: "Ok",
  }).then((result) => {
    if (result.isConfirmed) {
      document.location.reload();
    }
  });
};

export const listPatients = async () => {
  const res = await api.get("/patients");
  const data = res.data;    
  return JSON.stringify(data);
}

export const filterPatient = async (cpf) => {
  const res = await api.get(`/patients/${cpf}`);
  const data = res.data;    
  return JSON.stringify(data);
}

export const editPatient = (props) => {
  return api.put(`/patients/${props.id}`, {
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