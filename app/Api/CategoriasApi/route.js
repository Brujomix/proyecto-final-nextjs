import axios from "axios";
import { UrlServer_nube } from "@/app/Utilidades/UrlServer";

export const getCategorias = async () => {
  try {
    const res = await axios.get(`${UrlServer_nube}/Api/Categorias`);
    return res.data;
  } catch (error) {
    return error;
  }
};
