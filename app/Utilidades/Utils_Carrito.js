import { getProductobyId } from "../Api/ProductosApi/route";

export const SumaItemsCarrito = (itemsCarrito) => {
    let sumaCantidad = 0;
    for (let i = 0; i < itemsCarrito.length; i++) {
      sumaCantidad += itemsCarrito[i].Cantidad;
    }
    return sumaCantidad
};

export const PrecioCarrito = async (itemsCarrito) => {
  let total = 0;
  for (const obj of itemsCarrito) {
    const pro_iden = obj.pro_iden;
    const cantidad = obj.Cantidad;
    const precio = await getProductobyId(pro_iden);
    total += precio * cantidad;
  }
  return total;
};

export const ConvierteCarrito = (itemsCarrito) => {
  let newCarrito = [];
  for (const obj of itemsCarrito) {
    newCarrito.push({pro_iden:obj.pro_iden, Cantidad: obj.Cantidad})
  }
  return JSON.stringify(newCarrito);
};
