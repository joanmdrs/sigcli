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

export const listPatients = () => {
  api.get("/patients").then((response) => {
    return (response.data);
  })
}

// export const filterPatient = (cpf) => {
//   api.get(`/patient/get/${cpf}`).then((response) => {
//     return (response.data);
//   })
// }

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