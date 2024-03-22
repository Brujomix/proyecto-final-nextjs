"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "react-avatar";
import { validarUserLs } from "@/app/Api/UsuariosApi/route";
import Swal from "sweetalert2";
import { setCurrentUser, setIsLogin } from "@/Redux/Slices/UsuarioSlice";

export function Usuario() {
  const isLogin = useSelector((state) => state.Usuario.isLogin);
  const user = useSelector((state) => state.Usuario.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      const userStorage = localStorage.getItem("currentUser");
      if (userStorage !== null) {
        const userStorageParse = JSON.parse(userStorage);
        await validarUserLs(userStorageParse).then((res) => {
          if (res.status === 200) {
            Swal.fire({
              icon: "success",
              text: "Usuario Verificado",
              toast: true,
              position: "top-end",
              timer: 1800,
              showConfirmButton: false,
            });
            setCurrentUser(userStorageParse);
            dispatch(setCurrentUser(userStorageParse));
            dispatch(setIsLogin(true));
          } else {
            switch (res.response.status) {
              case 401:
                Swal.fire({
                  icon: "warning",
                  text: "No pudimos Validarte",
                  toast: true,
                  timer: 1800,
                  position: "top-end",
                  showConfirmButton: false,
                });
                break;
              case 500:
                Swal.fire({
                  icon: "error",
                  text: "Error del Servidor",
                  toast: true,
                  timer: 1800,
                  position: "top-end",
                  showConfirmButton: false,
                });
                break;
              default:
                break;
            }
          }
        });
      } else {
        Swal.fire({
          icon: "warning",
          text: "No pudimos Validarte",
          toast: true,
          timer: 1800,
          position: "top-end",
          showConfirmButton: false,
        });
      }
    };
    fetch();
  }, []);

  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <Link href={`/Usuarios`}>
        <Avatar
          round
          size={40}
          name={isLogin ? `${user.us_email}` : "Name User"}
        />
      </Link>
      <span className="tracking-widest italic text-blue-700">
        {isLogin ? (
          `${user.us_email}`
        ) : (
          <Link href={"/Usuarios/Login"}>Iniciar Session</Link>
        )}
      </span>
    </div>
  );
}
