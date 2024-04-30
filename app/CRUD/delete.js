import { UrlServer_nube } from "@/app/Utilidades/UrlServer";

/* Usuario */
export const deleteUsuario = async (us_iden) => {
  const res = await fetch(`${UrlServer_nube}/Api/Usuario/${us_iden}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res;
};

/* Producto */
export const deleteProducto = async (pro_iden) => {
  const res = await fetch(`${UrlServer_nube}/Api/Producto/${pro_iden}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res;
};

/* Delivery */
export const deleteDelivery = async (del_iden) => {
  const res = await fetch(`${UrlServer_nube}/Api/Delivery/${del_iden}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res;
};

/* Categoria */
export const deleteCategoria = async (cat_iden) => {
  const res = await fetch(`${UrlServer_nube}/Api/Categoria/${cat_iden}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res;
};