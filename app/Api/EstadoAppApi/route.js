import axios from "axios";
import { UrlServer_nube } from "@/app/Utilidades/UrlServer";

export const getEstado = async () => {
  try {
    const res = await axios.get(`${UrlServer_nube}/Api/Encender`);
    return res.data;
  } catch (error) {
    return error;
  }
};
