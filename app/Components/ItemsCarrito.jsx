import React from "react";
import { CardProductoCarrito } from "@/app/Components";

export function ItemsCarrito({ itemsCarrito }) {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-4">
      <div className="space-y-2">
        {itemsCarrito.map((e) => (
          <CardProductoCarrito key={e} productoCarrito={e} />
        ))}
      </div>
    </div>
  );
}
