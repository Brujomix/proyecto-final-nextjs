import { UrlServer_nube } from "@/app/Utilidades/UrlServer";

/* Producto */
export const addProducto = async (objProducto) => {
  const res = await fetch(`${UrlServer_nube}/Api/Producto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objProducto),
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res
};

/* Categoria */
export const addCategoria = async (objCategoria) => {
  const res = await fetch(`${UrlServer_nube}/Api/Categoria`, {
    method: "POST",
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

/* Comandas */
export const addComanda = async (objComanda) => {
  const res = await fetch(`${UrlServer_nube}/Api/Comanda`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objComanda),
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res;
};

/* Delivery */
export const addDelivery = async ( objDelivery ) => {
  const res = await fetch(`${UrlServer_nube}/Api/Delivery`, {
    method: "POST",
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

/* Usuario */
export const addUsuario = async (objUsuario) => {
  const res = await fetch(`${UrlServer_nube}/Api/Usuario`, {
    method: "POST",
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