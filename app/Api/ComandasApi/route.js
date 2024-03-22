import axios from "axios";
import { UrlServer_nube } from "@/app/Utilidades/UrlServer";

export const getComandas = async () => {
  try {
    const res = await axios.get(`${UrlServer_nube}/Api/Comandas`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const addComanda = async (comanda) => {
  try {
    const res = await axios.post(`${UrlServer_nube}/Api/Comanda`, comanda);
    return res;
  } catch (error) {
    return error;
  }
};
