import React, { Suspense } from "react";
import { getUsuarioFilter } from "@/app/Api/UsuariosApi/route";
import { FormEditUserSkeleton, FormEditUser } from "@/app/Components";

async function usuarioFilter({ params }) {
  const currentUser = await getUsuarioFilter(params.us_email);
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <span className="text-2xl font-semibold italic tracking-widest">
        Editar Usuario
      </span>
      <Suspense fallback={<FormEditUserSkeleton />}>
        <FormEditUser ObjUser={currentUser} />
      </Suspense>
    </div>
  );
}

export default usuarioFilter;
