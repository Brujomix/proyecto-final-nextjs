"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Avatar from "react-avatar";
import { validarUserLs } from "@/app/Api/UsuariosApi/route";
import Swal from "sweetalert2";

export function Usuario() {
  const isLogin = useSelector((state) => state.Usuario.isLogin);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const userStorage = localStorage.getItem("currentUser");
      if (userStorage !== null) {
        const userStoregeParse = JSON.parse(userStorage)
        await validarUserLs(userStoregeParse).then((res) => {
          if (res.status === 200) {
            Swal.fire({
              icon: "info",
              text: "Usuario Verificado",
              toast: true,
              position: "top-end",
              timer: 1800,
              showConfirmButton: false,
            });
            setCurrentUser(userStoregeParse);
          }
        });
      } else {
        Swal.fire({
          icon: "info",
          titleText: "No Pudimos Validarte",
          toast: true,
          position: "top-end",
          timer: 1800,
          showConfirmButton: false,
        });
      }
    };
    fetch();
  }, [currentUser]);

  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <Link href={`/Usuarios`}>
        <Avatar
          round
          size={40}
          name={isLogin ? `${currentUser.us_email}` : "Name User"}
        />
      </Link>
      <span className="tracking-widest italic text-blue-700">
        {isLogin ? (
          `${currentUser.us_email}`
        ) : (
          <Link href={"/Usuarios/Login"}>Iniciar Session</Link>
        )}
      </span>
    </div>
  );
}
