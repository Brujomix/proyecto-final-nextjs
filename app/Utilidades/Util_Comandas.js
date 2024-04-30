import { getPago, getUsuario, getEnvio, getProductobyId } from "../CRUD/gets";

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

export const infoProductosCarrito = (com_carrito) => {
  const productosEncontrados = [];
  com_carrito.forEach(async (e) => {
    const p = await getProductobyId(e.pro_iden)
    productosEncontrados.push({ infoProducto: p[0], ...e });
  });
  return productosEncontrados;
};