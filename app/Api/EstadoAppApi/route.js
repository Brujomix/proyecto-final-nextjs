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

export const putEstado = async (ObjEstado) => {
  try {
    await axios.put(`${UrlServer_nube}/Api/Encender`, ObjEstado).then((res) => {
      return res;
    });
  } catch (error) {
    return error;
  }
};
