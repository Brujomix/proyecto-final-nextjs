import axios from "axios";
import { UrlServer_nube } from "@/app/Utilidades/UrlServer";

export const getUsuarioFilter = async (us_email) => {
  try {
    const res = axios.get(`${UrlServer_nube}/Api/Usuarios/${us_email}`)
    return res.data[0];
  } catch (error) {
    return error
  }
};
