import { getProducto } from "../CRUD/gets";

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

export const infoProductosCarrito = async (com_carrito) => {
  const productosEncontrados = [];
  
  for (const e of com_carrito) {
    const p = await getProducto(e.pro_iden);
    productosEncontrados.push({ infoProducto: p, ...e });
  }
  
  return productosEncontrados;
};