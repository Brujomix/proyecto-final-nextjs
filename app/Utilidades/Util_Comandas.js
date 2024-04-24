import { getEnvio } from "../Api/EnvioApi/route";
import { getPago } from "../Api/MetodosPagoApi/route";
import { findUserById } from "./Util_Database";

/* Funcion para Imprimir Comanda */
export const imprimirComanda = (com_iden) => {
  console.log(`Imprimiendo Comanda ${com_iden}`);
};
/* Funcion para Imprimir Comanda */
export const avisarEnvio = (com_us_iden) => {
  console.log(`Comanda ha sido Enviada al cliente ${com_us_iden}`);
};

export const cambiaBackgroundComanda = (comanda) => {
  switch (comanda.com_escom_iden) {
    case 2:
      return "bg-slate-300";
    case 3:
      return "bg-green-500";
    default:
      return "bg-blue-300";
  }
};

export const infoComanda = async (comanda) => {
  const pago = await getPago(comanda.com_pago_iden);
  const Envio = await getEnvio(comanda.com_env_iden);
  return {
    metodoPago: pago.pago_desc,
    metodoEnvio: Envio.env_desc,
    totalComanda: 0,
  };
};

export const infoProductosCarrito = (com_carrito, productos) => {
  const productosEncontrados = [];
  com_carrito.forEach((e) => {
    const p = productos.filter((p) => p.pro_iden === e.pro_iden);
    productosEncontrados.push({ infoProducto: p[0], ...e });
  });
  return productosEncontrados;
};

export const getUserComanda = async (us_iden) => {
  const res = await findUserById(us_iden);
  return {
    us_name: res.us_name,
    us_dire: res.us_dire,
    us_tel: res.us_tel,
  };
};
