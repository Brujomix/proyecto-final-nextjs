import { UrlServer_nube } from "@/app/Utilidades/UrlServer";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { format } from "date-fns";

/* Estado APP */
export const getEstadoApp = createAsyncThunk("EstadoApp", async () => {
  const res = await fetch(`${UrlServer_nube}/Api/Encender`);
  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return await res.json();
});

/* Categorias */
export const getCategorias = async () => {
  const res = await fetch(`${UrlServer_nube}/Api/Categorias`, {
    cache: "no-store",
  });
  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res.json();
};

export const getCategoria = async (cat_iden) => {
  const res = await fetch(`${UrlServer_nube}/Api/Categoria/${cat_iden}`);
  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res.json();
};

/* Comandas */
export const getComandas = async () => {
  const res = await fetch(`${UrlServer_nube}/Api/Comandas`, {
    cache: "no-store",
  });
  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res.json();
};

export const getComandasFechRedux = createAsyncThunk("Comandas", async () => {
  const now = format(new Date(), "dd-MM-yyyy");
  const res = await fetch(`${UrlServer_nube}/Api/Comandas/${now}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res.json();
});

export const getComandasFech = async () => {
  const now = format(new Date(), "dd-MM-yyyy");
  const res = await fetch(`${UrlServer_nube}/Api/Comandas/${now}`, {
    cache: "no-store", credentials: "include"
  });
  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res.json();
};

export const getEstadosComanda = async () => {
  const res = await fetch(`${UrlServer_nube}/Api/EstadoComandas`);
  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res.json();
};

/* Deliverys */
export const getDeliverys = async () => {
  const res = await fetch(`${UrlServer_nube}/Api/Deliverys`, {
    cache: "no-store",
  });
  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res.json();
};

export const getDelivery = async (del_iden) => {
  const res = await fetch(`${UrlServer_nube}/Api/Delivery/${del_iden}`);
  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res.json();
};

/* Envios */
export const getEnvios = async () => {
  const res = await fetch(`${UrlServer_nube}/Api/Envios`);
  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res.json();
};

export const getEnvio = async (env_iden) => {
  const res = await fetch(`${UrlServer_nube}/Api/Envio/${env_iden}`);
  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res.json();
};

export const getPrecioEnvio = async () => {
  const res = await fetch(`${UrlServer_nube}/Api/Envio`, {
    cache: "no-store",
  });
  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res.json();
};

/* Pagos */
export const getPagos = async () => {
  const res = await fetch(`${UrlServer_nube}/Api/Pagos`);
  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res.json();
};

export const getPago = async (pago_iden) => {
  const res = await fetch(`${UrlServer_nube}/Api/Pago/${pago_iden}`);
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
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res.json();
};
export const getProductosbyPuntos = async () => {
  const res = await fetch(`${UrlServer_nube}/Api/ProductosRanking`, {
    cache: "no-store",
  });
  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res.json();
};

export const getProducto = async (pro_iden) => {
  const res = await fetch(`${UrlServer_nube}/Api/Producto/${pro_iden}`);
  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res.json();
};

/* Roles */
export const getRoles = async () => {
  const res = await fetch(`${UrlServer_nube}/Api/Roles`);
  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res.json();
};

/* Usuarios */
export const getUsuarios = async () => {
  const res = await fetch(`${UrlServer_nube}/Api/Usuarios`, {
    cache: "no-store",
  });
  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res.json();
};

export const getUsuario = async (us_iden) => {
  const res = await fetch(`${UrlServer_nube}/Api/Usuario/${us_iden}`);
  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Error del Servidor: ${errorMessage}`);
  }
  return res.json();
};
