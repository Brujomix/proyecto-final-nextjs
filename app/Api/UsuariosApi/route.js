import { promisePool } from "@/app/Database/config_db";

export const getUsuarioFilter = async (us_iden) => {
  try {
    const [row] = await promisePool.query(
      `SELECT * FROM usuario WHERE us_iden = ${us_iden}`
    );
    return row[0]
  } catch (error) {
    return {};
  }
};
