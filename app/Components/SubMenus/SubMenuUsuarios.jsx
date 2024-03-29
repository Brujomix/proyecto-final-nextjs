"use client";
import Link from "next/link";
import React from "react";
import { BotonDinamico } from "..";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "@/Redux/Slices/UsuarioSlice";
import Swal from "sweetalert2";
import { deleteUsuario } from "@/app/Api/UsuariosApi/route";

export function SubMenuUsuarios() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.Usuario.currentUser);
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-4">
      <Link className="Link" href={"/Usuarios/EditarUsuario"}>
        Editar Usuario
      </Link>
      <Link className="Link" href={"/Usuarios/RegistrarUsuario"}>
        Registrarme
      </Link>
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
              await deleteUsuario(currentUser).then((response) => {
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
      <BotonDinamico
        className="Link"
        onClick={() => {
          Swal.fire({
            icon: "question",
            title: "Cerrar Sessión?",
            showCancelButton: true,
            confirmButtonText: "Si",
            cancelButtonText: "No",
          }).then((res) => {
            if (res.isConfirmed) {
              dispatch(logOutUser());
            }
          });
        }}
      >
        Cerrar Session
      </BotonDinamico>
    </div>
  );
}
