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

export const getEnvio = async (env_iden) => {
  try {
    const res = await axios.get(`${UrlServer_nube}/Api/Envio/${env_iden}`);
    return res.data[0];
  } catch (error) {
    return error;
  }
};