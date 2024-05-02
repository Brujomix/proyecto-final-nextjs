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
export const editUsuario = async (us_iden, objUsuario) => {
  const res = await fetch(`${UrlServer_nube}/Api/Usuario/${us_iden}`, {
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
export const editProducto = async (pro_iden, objProducto) => {
  const res = await fetch(`${UrlServer_nube}/Api/Producto/${pro_iden}`, {
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
export const editDelivery = async (del_iden, objDelivery) => {
  const res = await fetch(`${UrlServer_nube}/Api/Delivery/${del_iden}`, {
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
export const editCategoria = async (cat_iden, objCategoria) => {
  const res = await fetch(`${UrlServer_nube}/Api/Categoria/${cat_iden}`, {
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
export const editComanda = async (com_iden) => {
  const res = await fetch(`${UrlServer_nube}/Api/Comanda/${com_iden}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({com_escom_iden: 3})
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res;
};