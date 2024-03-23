import React from "react";
import Link from "next/link";
import { validarUserLs } from "@/app/Api/UsuariosApi/route";
import Swal from "sweetalert2";
import { FaRegCircleUser } from "react-icons/fa6";

export async function Usuario_Icon() {
  const res = await validarUserLs()
  console.log(res);
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <Link href={`/Usuarios`}>
        <FaRegCircleUser size={40}/>
      </Link>
    </div>
  );
}
