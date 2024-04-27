import React, { Suspense } from "react";
import {
  FormEditUserSkeleton,
  FormEditUser,
  HeaderDinamico,
} from "@/app/Components";
import { getUsuario } from "@/app/CRUD/gets";

async function EditarUsuario({ params }) {
  const currentUser = await getUsuario(params.us_iden);
  console.log(currentUser);
  return (
    <main className="grid grid-cols-1 gap-7">
      <HeaderDinamico title={"Editar Usuario"}></HeaderDinamico>
      <div className="flex justify-center">
        <Suspense fallback={<FormEditUserSkeleton />}>
          <FormEditUser ObjUser={currentUser} />
        </Suspense>
      </div>
    </main>
  );
}

export default EditarUsuario;
