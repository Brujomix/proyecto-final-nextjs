"use client"
import React from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

export function Usuario() {
  const currentUser = useSelector(state => state.Usuario.currentUser)
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <Link href={`/Usuarios`}>
        <FaUserCircle size={40} />
      </Link>
      <span className="tracking-widest italic text-blue-700">{
        currentUser.isLogin ? `${currentUser.user.us_email}` : <Link href={"/Usuarios/Login"}>Iniciar Session</Link>
      }</span>
    </div>
  );
}
