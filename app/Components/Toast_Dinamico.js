import Swal from "sweetalert2";

export const Toast_Dinamico = (icon, text) => {
  return Swal.fire({
    icon: icon,
    text: text,
    toast: true,
    timer: 1800,
    position: "top-end",
    showConfirmButton: false,
  });
};
