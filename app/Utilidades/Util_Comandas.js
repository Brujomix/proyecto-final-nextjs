import { getProducto } from "../CRUD/gets";
import { editComanda } from "../CRUD/update";
import { Toast_Dinamico } from "../Components";

/* Funcion para Imprimir Comanda */
export const imprimirComanda = (com_iden) => {
  return alert(`Imprimienfdo Comanda ${com_iden}`);
};
/* Funcion para Imprimir Comanda */
export const avisarEnvio = async (com_iden) => {
  try {
    await editComanda(com_iden).then((res) => {
      if (res.status === 200) {
        Toast_Dinamico("success", "Comanda Actualizada");
      }
    });
  } catch (error) {
    console.log(error);
    Toast_Dinamico("error", "Error del Servidor");
  }
};

export const cambiaBackgroundComanda = (comanda) => {
  switch (comanda.com_escom_iden) {
    case 3:
      return "bg-slate-300";
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
