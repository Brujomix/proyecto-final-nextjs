import { getRoles } from "@/app/Api/RolesApi/route";
import { getUsuarios } from "@/app/Api/UsuariosApi/route";
import { TablaGenericaSkeleton, TablaUsuarios } from "@/app/Components";
import React, { Suspense } from "react";

async function page() {
  const Usuarios = await getUsuarios();
  const Roles = await getRoles();
  return (
    <main className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-row justify-center items-center flex-wrap gap-4">
        <Suspense fallback={<TablaGenericaSkeleton />}>
          <TablaUsuarios Usuarios={Usuarios} Roles={Roles} />
        </Suspense>
      </div>
    </main>
  );
}

export default page;
