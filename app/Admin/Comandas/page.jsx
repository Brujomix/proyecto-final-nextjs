import React, { Suspense } from "react";
import { CardComanda, CardComandaSkeleton } from "@/app/Components";
import { getProductos } from "@/app/Api/ProductosApi/route";

async function Comandas() {
    const Productos = await getProductos()
  return (
    <main className="grid grid-cols-1 gap-4">

     
    </main>
  );
}

export default Comandas;
