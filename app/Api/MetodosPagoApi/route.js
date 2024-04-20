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

export const getPago = async (pago_iden) => {
  try {
    const res = await axios.get(`${UrlServer_nube}/Api/Pago/${pago_iden}`);
    return res.data[0];
  } catch (error) {
    return error;
  }
};