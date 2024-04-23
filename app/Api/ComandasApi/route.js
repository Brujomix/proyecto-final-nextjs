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

export const getComandasFech = async (com_fech) => {
  try {
    const res = await axios.get(`${UrlServer_nube}/Api/Comandas/${com_fech}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getEstadosComanda = async () => {
  try {
    const res = await axios.get(`${UrlServer_nube}/Api/EstadoComandas`);
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
