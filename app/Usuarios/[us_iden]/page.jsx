import React, { Suspense } from "react";
import { FormEditUser, HeaderDinamico } from "@/app/Components";
import { getUsuario } from "@/app/CRUD/gets";

export const metadata={
  title:"Editar Usuario - E_Commerce",
  description:"Modificacion de usuario ya registrado"
}


async function EditarUsuario({ params }) {
  const currentUser = await getUsuario(params.us_iden);
  return (
    <main className="grid grid-cols-1 gap-7">
      <HeaderDinamico title={"Editar Usuario"}></HeaderDinamico>
      <div className="flex justify-center">
        <Suspense fallback={"Getting Data..."}>
          <FormEditUser ObjUser={currentUser} />
        </Suspense>
      </div>
    </main>
  );
}

export default EditarUsuario;
