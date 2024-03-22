import axios from "axios";
import { UrlServer_nube } from "./UrlServer";

export const findUserById = async (us_iden) => {
  try {
    const res = await axios.get(`${UrlServer_nube}/Api/UsuarioById/${us_iden}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const findCatById = async (cat_iden) => {
  try {
    await axios
      .get(`${UrlServer_nube}/Api/Categoria/${cat_iden}`)
      .then((res) => {
        return res.cat_desc;
      });
  } catch (error) {
    console.log(error);
  }
};
