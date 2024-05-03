import { UrlServer_nube } from "../Utilidades/UrlServer";

/* Validaciones de Usuario */

export const validarUsuario = async (objUsuario) => {
    const res = await fetch(`${UrlServer_nube}/Api/ValidarUsuario`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objUsuario),
    });
  
    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Error del Servidor: ${errorMessage}`);
    }
  
    return await res.json();
  };
  
  export const validarUserLs = async (objUsuario) => {
    const res = await fetch(`${UrlServer_nube}/Api/UserLS`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objUsuario),
    });
  
    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Error del Servidor: ${errorMessage}`);
    }
    return res;
  };