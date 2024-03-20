"use client";
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Avatar from "react-avatar";

export function Usuario() {
  const currentUser = useSelector((state) => state.Usuario.currentUser);
  const isLogin = useSelector((state) => state.Usuario.isLogin);
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
