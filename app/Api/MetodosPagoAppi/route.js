import axios from "axios";
import { UrlServer_nube } from "@/app/Utilidades/UrlServer";

export const getPagos = async () => {
  try {
    const res = await axios.get(`${UrlServer_nube}/Api/Pagos`);
    return res.data;
  } catch (error) {
    return error;
  }
};