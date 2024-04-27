import axios from "axios";
import { UrlServer_nube } from "@/app/Utilidades/UrlServer";

export const addDelivery = async ({ objDelivery }) => {
  try {
    const res = await axios.post(
      `${UrlServer_nube}/Api/Delivery`,
      objDelivery
    );
    return res.status;
  } catch (error) {
    return error;
  }
};

export const editDelivery = async ({ objDelivery }) => {
  try {
    const res = await axios.put(`${UrlServer_nube}/Api/Delivery`, objDelivery);
    return res.status;
  } catch (error) {
    return error;
  }
};

export const deleteDelivery = async ({ objDelivery }) => {
  try {
    const res = await axios.delete(
      `${UrlServer_nube}/Api/Delivery/${objDelivery.del_iden}`,
      objDelivery
    );
    return res.status;
  } catch (error) {
    return error;
  }
};