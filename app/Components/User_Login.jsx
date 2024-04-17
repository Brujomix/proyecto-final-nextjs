"use client"
import React from "react";
import Link from "next/link";
import { BotonDinamico } from "@/app/Components";
import Swal from "sweetalert2";
import { deleteUsuario } from "../Api/UsuariosApi/route";
import { useDispatch } from "react-redux";
import { logOutUser } from "@/Redux/Slices/UsuarioSlice";

export function User_Login({ objUser }) {
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col gap-7 justify-center items-center">
      <BotonDinamico
        onClick={() => {
          Swal.fire({
            icon: "question",
            title: "Cerrar Session ?",
            showCancelButton: true,
            confirmButtonText: "Si",
            cancelButtonText: "No",
          }).then(res=>{
            if (res.isConfirmed) {
              dispatch(logOutUser())
              localStorage.removeItem("currentUser")
            }
          })     
        }}
      >
        Cerrar Session
      </BotonDinamico>
      <Link className="Link" href={`Usuarios/${objUser.us_email}`}>Editar Usuario</Link>
      <BotonDinamico
        className="Link"
        onClick={() => {
          Swal.fire({
            icon: "question",
            title: "Lamentamos que te vayas !!!",
            text: "Eliminar Cuenta",
            showCancelButton: true,
            confirmButtonText: "Si",
            cancelButtonText: "No",
          }).then(async (res) => {
            if (res.isConfirmed) {
              await deleteUsuario(objUser).then((response) => {
                if (response.statusText === "OK") {
                  Swal.fire({
                    icon: "success",
                    text: "Cuenta Eliminada",
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                  });
                } else {
                  Swal.fire({
                    icon: "error",
                    text: "No pudimos eliminar esta cuenta",
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                  });
                }
              });
            }
          });
        }}
      >
        Eliminar Usuario
      </BotonDinamico>
    </div>
  );
}
