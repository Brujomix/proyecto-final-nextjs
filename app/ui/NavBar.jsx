import React from "react";
import Link from "next/link";
import { getCategorias } from "@/app/Api/CategoriasApi/route";

export async function NavBar() {
  const listaCategorias = await getCategorias();
  return (
    <div className="flex justify-center items-center">
      <div className="hide-scrollbar-buttons overflow-x-auto mb-4 flex flex-row gap-3 ml-5 mr-5 p-2">
        {listaCategorias.map((e) => (
          <Link
            className="text-center border text-sm italic tracking-wider border-neutral-400 p-2 rounded-md bg-white"
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
