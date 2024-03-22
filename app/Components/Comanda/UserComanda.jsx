import React from "react";
import { findUserById } from "@/app/Utilidades/Util_Database";

export const UserComanda = async ({ id_user }) => {
  const res = await findUserById(id_user);
  return (
    <div  className="flex flex-col justify-start items-start border p-2">
      <span>{res.us_name}</span>
      <strong>{res.us_dire}</strong>
      <span>{res.us_tel}</span>
    </div>
  );
};
