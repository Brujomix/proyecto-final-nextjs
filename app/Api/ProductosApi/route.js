import { promisePool } from "@/app/Database/config_db";

export const getProductos = async () => {
    try {
        const [rows] = await promisePool.query("SELECT * FROM producto")
        return rows
        
    } catch (error) {
        return error
    }
}

export const getProductosbyCategoria = async (cat_iden) => {
    try {
        const [rows] = await promisePool.query(`SELECT * FROM producto WHERE pro_cat_iden = ${cat_iden}`)
        return rows
        
    } catch (error) {
        return error
    }
}