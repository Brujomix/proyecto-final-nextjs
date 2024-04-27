import { UrlServer_nube } from "@/app/Utilidades/UrlServer";

/* Producto */

export const addProducto = async (objProducto) => {
  const res = await fetch(`${UrlServer_nube}/Api/Producto`, {
    method: "POST",
    body: JSON.stringify(objProducto),
  });
  if (!res.ok) {
    throw new Error("Error del Servidor");
  }

  return res.status(200).json("Agregado con Exito");
};