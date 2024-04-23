import axios from "axios";
import { UrlServer_nube } from "@/app/Utilidades/UrlServer";

export const getRoles = async () => {
  try {
    const res = await axios.get(`${UrlServer_nube}/Api/Roles`);
    return res.data;
  } catch (error) {
    return error;
  }
};