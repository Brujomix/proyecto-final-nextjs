import React, { Suspense } from "react";
import Link from "next/link";
import { getCategorias } from "@/app/Api/CategoriasApi/route";
import NavBarSkeleton from "../Components/Skeletons/NavBarSkeleton";

export async function NavBar() {
  const listaCategorias = await getCategorias();

  return (
    <Suspense fallback={<NavBarSkeleton/>}>
      <div className=" p-4 flex flex-col flex-wrap justify-around items-center gap-3 md:flex md:flex-row md:w-fill">
        {listaCategorias.map((e) => (
          <Link className="md:w-auto w-full italic font-2xl border border-neutral-500 rounded-md p-2 bg-neutral-300" key={e.cat_iden} href={"/"}>
            {e.cat_desc}
          </Link>
        ))}
      </div>
    </Suspense>
  );
}
