import axios from "axios";
import { UrlServer_nube } from "@/app/Utilidades/UrlServer";

export const getUsuarios = async () => {
  try {
    const res = await axios.get(`${UrlServer_nube}/Api/Usuarios`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getUsuario = async (us_iden) => {
  try {
    const res = await axios.get(`${UrlServer_nube}/Api/Usuario/${us_iden}`);
    return res.data[0];
  } catch (error) {
    return error;
  }
};

export const validarUsuario = async (ObjUsuario) => {
  try {
    const res = await axios.post(
      `${UrlServer_nube}/Api/ValidarUsuario`,
      ObjUsuario
    );
    return res;
  } catch (error) {
    return error;
  }
};

export const validarUserLs = async (ObjUsuario) => {
  try {
    const res = await axios.post(`${UrlServer_nube}/Api/UserLS`, ObjUsuario);
    return res;
  } catch (error) {
    return error;
  }
};

export const addUsuario = async (ObjUsuario) => {
  try {
    const res = await axios.post(`${UrlServer_nube}/Api/Usuario`, ObjUsuario);
    return res;
  } catch (error) {
    return error;
  }
};

export const editUsuario = async (ObjUsuario) => {
  try {
    const res = await axios.put(`${UrlServer_nube}/Api/Usuario`, ObjUsuario);
    return res.status;
  } catch (error) {
    return error;
  }
};

export const deleteUsuario = async (us_iden) => {
  try {
    const res = await axios.delete(`${UrlServer_nube}/Api/Usuario/${us_iden}`);
    return res;
  } catch (error) {
    return error;
  }
};
