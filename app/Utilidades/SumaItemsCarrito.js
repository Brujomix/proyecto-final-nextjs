export const SumaItemsCarrito = (itemsCarrito) => {
    let sumaCantidad = 0;
    for (let i = 0; i < itemsCarrito.length; i++) {
      sumaCantidad += itemsCarrito[i].Cantidad;
    }
    return sumaCantidad
};
