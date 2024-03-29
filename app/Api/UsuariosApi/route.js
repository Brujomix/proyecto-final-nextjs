import axios from "axios";
import { UrlServer_nube } from "@/app/Utilidades/UrlServer";

export const getUsuarioFilter = async (us_email) => {
  try {
    const res = axios.get(`${UrlServer_nube}/Api/Usuario/${us_email}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const validarUsuario = async (ObjUsuario)=>{
  try {
    const res = await axios.post(`${UrlServer_nube}/Api/ValidarUsuario`, ObjUsuario)
    return res
  } catch (error) {
    return error;
  }
}

export const validarUserLs = async (ObjUsuario)=>{
  try {
    const res = await axios.post(`${UrlServer_nube}/Api/UserLS`, ObjUsuario)
    return res
  } catch (error) {
    return error;
  }
}

export const addUsuario = async ( ObjUsuario ) => {
  try {
    const res = await axios.post(
      `${UrlServer_nube}/Api/Usuario`,
      ObjUsuario
    );
    return res.status;
  } catch (error) {
    return error;
  }
};

export const editUsuario = async ( ObjUsuario ) => {
  try {
    const res = await axios.put(`${UrlServer_nube}/Api/Usuario`, ObjUsuario);
    return res.status;
  } catch (error) {
    return error;
  }
};

export const deleteUsuario = async (ObjUsuario ) => {
  try {
    const res = await axios.delete(
      `${UrlServer_nube}/Api/Usuario/${ObjUsuario.us_iden}`,
      ObjUsuario
    );
    return res.status;
  } catch (error) {
    return error;
  }
};