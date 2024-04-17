import { getProductobyId } from "../Api/ProductosApi/route";

import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineDeliveryDining } from "react-icons/md";

import { SiMercadopago } from "react-icons/si";
import { BsCashCoin } from "react-icons/bs";
import { CiBank } from "react-icons/ci";

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

export const envioIcons = (env_desc)=>{
  switch (env_desc) {
    case "Delivery":
      return <MdOutlineDeliveryDining size={50}/>
      break;
    case "Retiro en Local":
      return <IoHomeOutline size={50}/>
      break;
  }
}

export const pagoIcons = (pago_desc)=>{
  switch (pago_desc) {
    case "Transferencia":
      return <CiBank size={50}/>
      break;
    case "Efectivo":
      return <BsCashCoin size={50}/>
      break;
    case "Mercadopago":
      return <SiMercadopago size={50}/>
      break;
  }
}
