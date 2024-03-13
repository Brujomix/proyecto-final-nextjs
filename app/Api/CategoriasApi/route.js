import { promisePool } from "@/app/Database/config_db";

export const getCategorias = async () => {
    try {
        const [rows] = await promisePool.query("SELECT * FROM categoria")
        return rows
        
    } catch (error) {
        return error
    }
}