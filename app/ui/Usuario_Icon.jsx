"use client";
import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import { FaUserAltSlash, FaUserCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, setIsLogin } from "@/Redux/Slices/UsuarioSlice";

export function Usuario_Icon() {
  const isLogin = useSelector((state) => state.Usuario.isLogin);
  const [userLogin, setUserLogin] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const setUser = () => {
      const userStorage = localStorage.getItem("currentUser")
      if (userStorage !== null) {
        setUserLogin(JSON.parse(userStorage));
        dispatch(setCurrentUser(JSON.parse(userStorage)));
        dispatch(setIsLogin(true));
      } else {
        setUserLogin({});
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
            <FaUserCheck color="#666" size={40} />
            <span className="text-blue-500 text-sm italic">
              {userLogin.us_email}
            </span>
          </div>
        )}
      </Link>
    </div>
  );
}
