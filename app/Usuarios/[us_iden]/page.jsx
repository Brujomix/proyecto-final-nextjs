import { getUsuarioFilter } from "@/app/Api/UsuariosApi/route";
import React, { Suspense } from "react";

async function usuarioFilter({ params }) {
  const currentUser = await getUsuarioFilter(params.us_iden);
  console.log(currentUser);
  return (
    <Suspense fallback={"Getting Current User"}>
      <div className=" max-w-fit border border-neutral-700 p-4 rounded-md">
        hacer que por cada key del objeto se renderice un span
      </div>
    </Suspense>
  );
}

export default usuarioFilter;
