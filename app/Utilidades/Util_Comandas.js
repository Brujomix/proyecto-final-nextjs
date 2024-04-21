import { getEnvio } from "../Api/EnvioApi/route";
import { getPago } from "../Api/MetodosPagoApi/route";
import { getProductobyId, getProductos } from "../Api/ProductosApi/route";
import { getUsuario } from "../Api/UsuariosApi/route";

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
  const Usuario = await getUsuario(comanda.us_iden);
  const pago = await getPago(comanda.com_pago_iden);
  const Envio = await getEnvio(comanda.com_env_iden);
  return [
    { user: Usuario },
    { metodoPago: pago.pago_desc },
    { metodoEnvio: Envio.env_desc },
  ];
};

export const infoProductosCarrito = (com_carrito, productos) => {
  const productosEncontrados = []
  com_carrito.forEach(e => {
    const p = productos.filter(p => p.pro_iden === e.pro_iden)
    productosEncontrados.push({infoProducto: p[0], ...e})
  });
  return productosEncontrados;
};
