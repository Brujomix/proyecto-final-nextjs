import { UrlServer_nube } from "@/app/Utilidades/UrlServer";

/* Estado APP */
export const putEstado = async (objEstado) => {
  const res = await fetch(`${UrlServer_nube}/Api/Encender`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objEstado),
  });
  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res;
};

/* Usuario */
export const editUsuario = async (objUsuario) => {
  const res = await fetch(`${UrlServer_nube}/Api/Usuario`, {
    method: "PUT",
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
export const editProducto = async (objProducto) => {
  const res = await fetch(`${UrlServer_nube}/Api/Producto`, {
    method: "PUT",
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
export const editDelivery = async (objDelivery) => {
  const res = await fetch(`${UrlServer_nube}/Api/Delivery`, {
    method: "PUT",
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
export const editCategoria = async (objCategoria) => {
  const res = await fetch(`${UrlServer_nube}/Api/Categoria`, {
    method: "PUT",
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

/* Comanda */
export const editComanda = async (objComanda) => {
  const res = await fetch(`${UrlServer_nube}/Api/Categoria/${objComanda.com_iden}`, {
    method: "PUT",
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