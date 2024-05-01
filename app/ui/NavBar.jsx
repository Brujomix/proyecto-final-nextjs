import React, { Suspense } from "react";
import { getCategorias } from "../CRUD/gets";
import EnlaceCategoria from "./EnlaceCategoria";
import { NavbarSkeleton } from "../Components";

export async function NavBar() {
  const listaCategorias = await getCategorias();

  return (

      <div className="hide-scrollbar-buttons overflow-x-auto mb-4 flex flex-row gap-3 ml-5 mr-5 p-2 md:flex md:justify-center">
        {listaCategorias.map((e) => (
          <Suspense key={e.cat_iden} fallback={<NavbarSkeleton/>}>
            <EnlaceCategoria categoria={e}/>
          </Suspense>
        ))}
      </div>

  );
}
