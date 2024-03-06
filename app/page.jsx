import { Suspense } from "react";
import { getProductos } from "./Api/ProductosApi/route";
import { CardProductoSkeleton } from "./Components/Skeletons";
import { CardProducto } from "./Components";

export default async function Home() {
  const listaProductos = await getProductos();
  return (
    <Suspense fallback={<CardProductoSkeleton />}>
      <main>
        <div className="flex flex-row justify-around items-center flex-wrap gap-3">
          {listaProductos.map((e) => (
            <CardProducto producto={e} />
          ))}
        </div>
      </main>
    </Suspense>
  );
}
