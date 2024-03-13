import { promisePool } from "@/app/Database/config_db";

export const getComandas = async () => {
    try {
        const [rows] = await promisePool.query("SELECT * FROM comanda ORDER BY com_date DESC")
        return rows
        
    } catch (error) {
        return error
    }
}