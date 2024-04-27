import axios from "axios";
import { UrlServer_nube } from "@/app/Utilidades/UrlServer";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getEstadoApp = createAsyncThunk("EstadoApp", async () => {
  const res = await fetch(`${UrlServer_nube}/Api/Encender`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Fallo en la Obtencion de Datos");
  }
  return res.json();
});

export const putEstado = async (enc_desc) => {
  try {
    const res = await axios.put(`${UrlServer_nube}/Api/Encender`, enc_desc)
    return res;
  } catch (error) {
    console.log(error);
  }
};
