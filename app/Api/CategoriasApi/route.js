import { promisePool } from "@/app/Database/config_db";

export const getCategorias = async () => {
    try {
        const [rows] = await promisePool.query("SELECT * FROM categoria ORDER BY cat_desc")
        return rows
        
    } catch (error) {
        return []
    }
}