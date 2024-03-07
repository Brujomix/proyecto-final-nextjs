import React from "react";

export function FormEditUserSkeleton() {
  return (
    <div className="flex flex-col justify-center items-center opacity-50 border rounded-md p-4">
      <span className="border rouded-md w-10 h-20">Email</span>
      <span className="border rouded-md w-10 h-20">Name</span>
      <span className="border rouded-md w-10 h-20">Telefono</span>
      <span className="border rouded-md w-10 h-20">Direccion</span>
      <span className="border rouded-md w-10 h-20">Password</span>
    </div>
  );
}
