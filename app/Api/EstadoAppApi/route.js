import axios from "axios";
import { UrlServer_nube } from "@/app/Utilidades/UrlServer";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getEstadoApp = createAsyncThunk("EstadoApp", async () => {
  try {
    const res = await axios.get(`${UrlServer_nube}/Api/Encender`);
    return res.data.enc_desc;
  } catch (error) {
    throw new Error("Este Es un Error de API", error);
  }
});

export const putEstado = async (enc_desc) => {
  try {
    const res = await axios.put(`${UrlServer_nube}`, enc_desc)
    return res;
  } catch (error) {
    throw new Error("Este Es un Error de API", error);
  }
};
