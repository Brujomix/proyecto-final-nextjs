import axios from "axios";
import { UrlServer_nube } from "@/app/Utilidades/UrlServer";

export const getProductos = async () => {
    try {
        const res = await axios.get(`${UrlServer_nube}/Api/Productos`)
        return res.data
        
    } catch (error) {
        return error
    }
}

export const getProductosbyCategoria = async (cat_iden) => {
    try {
        const res = await axios.get(`${UrlServer_nube}/Api/Productos/${cat_iden}`)
        return res.data
        
    } catch (error) {
        return error
    }
}
export const getProductosbyPuntos = async () => {
    try {
        const res = await axios.get(`${UrlServer_nube}/Api/ProductosRanking`)
        return res.data
        
    } catch (error) {
        return error
    }
}

export const getProductobyId = async (pro_iden) => {
    try {
        const res = await axios.get(`${UrlServer_nube}/Api/Producto/${pro_iden}`)
        return res.data[0].pro_precio
        
    } catch (error) {
        return error
    }
}