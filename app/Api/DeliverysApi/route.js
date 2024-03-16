import axios from "axios";
import { UrlServer_nube } from "@/app/Utilidades/UrlServer";

export const getDeliverys = async () => {
  try {
    const res = await axios.get(`${UrlServer_nube}/Api/Deliverys`);
    return res.data;
  } catch (error) {
    return error;
  }
};