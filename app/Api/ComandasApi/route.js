import axios from "axios";
import { UrlServer_nube } from "@/app/Utilidades/UrlServer";

export const addComanda = async (comanda) => {
  try {
    const res = await axios.post(`${UrlServer_nube}/Api/Comanda`, comanda);
    return res;
  } catch (error) {
    return error;
  }
};
