import axios from "axios";
import { UrlServer_nube } from "@/app/Utilidades/UrlServer";

export const getPrecioEnvio = async () => {
  try {
    const res = await axios.get(`${UrlServer_nube}/Api/Envio`);
    return res.data;
  } catch (error) {
    return error;
  }
};