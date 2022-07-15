import Swal from "sweetalert2";

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

export const messageInfo = (message) => {
  Swal.fire({
      title: 'Info',
      text: message,
      icon: 'info',
      showCancelButton: false,
      confirmButtonColor: '#0C6170',
      confirmButtonText: 'Ok',
  });
}
  
export const messageError = (message) => {
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

export const messageWarning = async () => {

  const result = await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#0C6170',
    confirmButtonText: 'Yes, delete it!'
  })

  return result;
};