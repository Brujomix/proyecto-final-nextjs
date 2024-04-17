import axios from "axios";
import { UrlServer_nube } from "@/app/Utilidades/UrlServer";

export const getEnvios = async () => {
  try {
    const res = await axios.get(`${UrlServer_nube}/Api/Envios`);
    return res.data;
  } catch (error) {
    return error;
  }
};