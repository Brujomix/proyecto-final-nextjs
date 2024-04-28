import { UrlServer_nube } from "@/app/Utilidades/UrlServer";
import { createAsyncThunk } from "@reduxjs/toolkit";

/* Estado APP */
export const getEstadoApp = createAsyncThunk("EstadoApp", async () => {
  const res = await fetch(`${UrlServer_nube}/Api/Encender`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Fallo en la Obtencion de Datos");
  }
  return await res.json();
});

/* Categorias */
export const getCategorias = async () => {
  const res = await fetch(`${UrlServer_nube}/Api/Categorias`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error del Servidor");
  }
  return res.json();
};

export const getCategoria = async (cat_iden) => {
  const res = await fetch(`${UrlServer_nube}/Api/Categoria/${cat_iden}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error del Servidor");
  }
  return res.json();
};

/* Comandas */
export const getComandas = async () => {
  const res = await fetch(`${UrlServer_nube}/Api/Comandas`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error del Servidor");
  }
  return res.json();
};

export const getComandasFech = async (com_fech) => {
  const res = await fetch(`${UrlServer_nube}/Api/Comandas/${com_fech}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error del Servidor");
  }
  return res.json();
};

export const getEstadosComanda = async () => {
  const res = await fetch(`${UrlServer_nube}/Api/EstadoComandas`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error del Servidor");
  }
  return res.json();
};

/* Deliverys */
export const getDeliverys = async () => {
  const res = await fetch(`${UrlServer_nube}/Api/Deliverys`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error del Servidor");
  }
  return res.json();
};

export const getDelivery = async (del_iden) => {
  const res = await fetch(`${UrlServer_nube}/Api/Delivery/${del_iden}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error del Servidor");
  }
  return res.json();
};

/* Envios */
export const getEnvios = async () => {
  const res = await fetch(`${UrlServer_nube}/Api/Envios`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error del Servidor");
  }
  return res.json();
};

export const getEnvio = async (env_iden) => {
  const res = await fetch(`${UrlServer_nube}/Api/Envio/${env_iden}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error del Servidor");
  }
  return res.json();
};

export const getPrecioEnvio = async () => {
  const res = await fetch(`${UrlServer_nube}/Api/Envio`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error del Servidor");
  }
  return res.json();
};

/* Pagos */
export const getPagos = async () => {
  const res = await fetch(`${UrlServer_nube}/Api/Pagos`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error del Servidor");
  }
  return res.json();
};

export const getPago = async (pago_iden) => {
  const res = await fetch(`${UrlServer_nube}/Api/Pago/${pago_iden}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error del Servidor");
  }
  return res.json();
};

/* Productos */
export const getProductos = async () => {
  const res = await fetch(`${UrlServer_nube}/Api/Productos`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error del Servidor");
  }
  return res.json();
};

export const getProductosbyCategoria = async (cat_iden) => {
  const res = await fetch(`${UrlServer_nube}/Api/Productos/${cat_iden}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error del Servidor");
  }
  return res.json();
};
export const getProductosbyPuntos = async () => {
  const res = await fetch(`${UrlServer_nube}/Api/ProductosRanking`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error del Servidor");
  }
  return res.json();
};

export const getProductobyId = async (pro_iden) => {
  const res = await fetch(`${UrlServer_nube}/Api/Producto/${pro_iden}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error del Servidor");
  }
  return res.json();
};

/* Roles */
export const getRoles = async () => {
  const res = await fetch(`${UrlServer_nube}/Api/Roles`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error del Servidor");
  }
  return res.json();
};

/* Usuarios */
export const getUsuarios = async () => {
  const res = await fetch(`${UrlServer_nube}/Api/Usuarios`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error del Servidor");
  }
  return res.json();
};

export const getUsuario = async (us_iden) => {
  const res = await fetch(`${UrlServer_nube}/Api/Usuario/${us_iden}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error del Servidor");
  }
  return res.json();
};
