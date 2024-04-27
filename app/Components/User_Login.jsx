"use client";
import React from "react";
import Link from "next/link";
import { BotonDinamico, Toast_Dinamico } from "@/app/Components";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { logOutUser } from "@/Redux/Slices/UsuarioSlice";
import { deleteUsuario } from "../CRUD/delete";

export function User_Login({ objUser }) {
  const dispatch = useDispatch();
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
          }).then((res) => {
            if (res.isConfirmed) {
              dispatch(logOutUser());
              localStorage.removeItem("currentUser");
            }
          });
        }}
      >
        Cerrar Session
      </BotonDinamico>
      <Link className="Link" href={`/Usuarios/${objUser.us_iden}`}>
        Editar Usuario
      </Link>
      <BotonDinamico
        className="Link"
        onClick={() => {
          Swal.fire({
            icon: "question",
            title: "Lamentamos que te vayas !!!",
            text: "Eliminar Cuenta ?",
            showCancelButton: true,
            confirmButtonText: "Si",
            cancelButtonText: "No",
          }).then(async (res) => {
            if (res.isConfirmed) {
              await deleteUsuario(objUser.us_iden).then((response) => {
                if (response.status === 200) {
                  Toast_Dinamico("success", "UsuarioEliminado");
                  dispatch(logOutUser());
                } else {
                  Toast_Dinamico("error", "No pudimos eliminar esta cuenta");
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
