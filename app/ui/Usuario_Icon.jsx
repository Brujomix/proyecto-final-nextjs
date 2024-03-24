"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaUserAltSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "@/Redux/Slices/UsuarioSlice";

export function Usuario_Icon() {

  const isLogin = useSelector(state => state.Usuario.isLogin)
  const [userLogin, setUserLogin] = useState({});
  const currentUser = localStorage.getItem("currentUser");
  const dispatch = useDispatch();

  useEffect(() => {
    const setUser = () => {
      if (currentUser !== null) {
        setUserLogin(JSON.parse(currentUser))
        dispatch(setCurrentUser(JSON.parse(currentUser)))
      }
    };
    setUser();
  }, [isLogin]);

  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <Link href={`/Usuarios`}>
        {Object.keys(userLogin).length === 0 ? (
          <div className="flex flex-row justify-center items-center gap-2">
            <FaUserAltSlash color="#666" size={40} />
            <span className="text-blue-500 text-sm italic">Inicia Sessión</span>
          </div>
        ) : (
          <div className="flex flex-row justify-center items-center gap-2">
            <FaRegCircleUser color="#666" size={40} />
            <span className="text-blue-500 text-sm italic">
              {userLogin.us_email}
            </span>
          </div>
        )}
      </Link>
    </div>
  );
}
