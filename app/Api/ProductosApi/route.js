import { promisePool } from "@/app/Database/config_db";

export const getProductos = async () => {
    try {
        const [rows] = await promisePool.query("SELECT * FROM producto")
        return rows
        
    } catch (error) {
        return []
    }
}