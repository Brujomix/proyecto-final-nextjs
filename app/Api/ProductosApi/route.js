import axios from "axios";
import { UrlServer_nube } from "@/app/Utilidades/UrlServer";

export const editProducto = async (pro_iden, objProducto) => {
  try {
    const res = await axios.put(
      `${UrlServer_nube}/Api/Producto/${pro_iden}`,
      objProducto
    );
    return res;
  } catch (error) {
    return error;
  }
};

export const deleteProducto = async (pro_iden) => {
  try {
    const res = await axios.delete(
      `${UrlServer_nube}/Api/Producto/${pro_iden}`
    );
    return res;
  } catch (error) {
    return error;
  }
};
