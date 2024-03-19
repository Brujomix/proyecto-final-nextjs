import React from "react";
import Link from "next/link";
import { getCategorias } from "../Api/CategoriasApi/route";

export async function NavBar() {
  const listaCategorias = await getCategorias();
  return (
    <div className="w-full p-2 flex flex-col gap-4 bg-neutral-50">
      <div className="flex flex-row flex-wrap justify-center items-center gap-4">
        {listaCategorias.map((e) => (
          <Link
            className="border text-sm text-semibold italic tracking-wider border-neutral-400 p-2 rounded-md bg-white"
            key={e.cat_iden}
            href={`/Productos/${e.cat_iden}`}
          >
            {e.cat_desc}
          </Link>
        ))}
      </div>
    </div>
  );
}
