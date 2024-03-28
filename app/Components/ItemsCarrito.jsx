import React from "react";
import { CardProductoCarrito } from "@/app/Components";
import { CardProductoSkeleton } from "@/app/Components/Skeletons";

export function ItemsCarrito() {
  const itemsCarrito = [];
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="space-y-2">
        {itemsCarrito.map((e) => (
          <Suspense key={e.pro_iden} fallback={<CardProductoSkeleton />}>
            <CardProductoCarrito productoCarrito={e} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}
