"use client"
import Link from "next/link";
import React from "react";
import { FaUserAltSlash, FaUserCheck } from "react-icons/fa";
import { useSelector } from "react-redux";

export function Usuario_Icon() {
    const currentUser = useSelector(state=>state.Usuario.currentUser)
  return (
    <div>
      {currentUser === null ? (
        <Link href={"/Usuarios"} className="flex flex-row justify-center items-center gap-2">
          <FaUserAltSlash color="#666" size={40} />
          <span className="text-blue-500 text-sm italic">Inicia Sessión</span>
        </Link>
      ) : (
        <Link href={"/Usuarios"}  className="flex flex-row justify-center items-center gap-2">
          <FaUserCheck color="#666" size={40} />
          <span className="text-blue-500 text-sm italic">
            {currentUser.us_email}
          </span>
        </Link>
      )}
    </div>
  );
}
