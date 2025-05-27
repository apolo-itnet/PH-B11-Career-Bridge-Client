import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const showSweetNotify = (msg = 'Success!') => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: msg,
    showConfirmButton: false,
    timer: 1500,
  });
}
export const showSweetError = (msg = 'Something went wrong!') => {
  Swal.fire({
    position: "top-end",
    icon: "error",
    title: msg,
    showConfirmButton: false,
    timer: 1500,
  });
}

export const showToastError = (msg = 'Something went wrong!') => {
  toast.error(msg)
}
