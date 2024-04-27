import { UrlServer_nube } from "@/app/Utilidades/UrlServer";

/* Usuario */
export const deleteUsuario = async (objUsuario) => {
  const res = await fetch(`${UrlServer_nube}/Api/Usuario`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objUsuario),
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res;
};

/* Producto */
export const deleteProducto = async (objProducto) => {
  const res = await fetch(`${UrlServer_nube}/Api/Producto`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objProducto),
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res;
};

/* Delivery */
export const deleteDelivery = async (objDelivery) => {
  const res = await fetch(`${UrlServer_nube}/Api/Delivery`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objDelivery),
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res;
};

/* Categoria */
export const deleteCategoria = async (objCategoria) => {
  const res = await fetch(`${UrlServer_nube}/Api/Categoria`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objCategoria),
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res;
};