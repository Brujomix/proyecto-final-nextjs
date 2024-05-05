import { Router } from "express";
import { pool } from "../configDB.js";

const router = Router();

router.get("/Api/EstadoComandas", async (req, res) => {
  try {
    const promisePool = pool.promise();
    const [rows] = await promisePool.query("SELECT * FROM estadocom");
    return res.json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/Api/Comandas", async (req, res) => {
  try {
    const promisePool = pool.promise();
    const [rows] = await promisePool.query("SELECT * FROM comanda");
    return res.json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/Api/Comandas/:Date", async (req, res) => {
  try {
    const promisePool = pool.promise();
    const [rows] = await promisePool.query(
      "SELECT comanda.com_iden, comanda.com_carrito, comanda.com_date, comanda.com_precioEnvio, comanda.com_exep, comanda.com_hora, comanda.com_escom_iden, envio.env_desc AS 'DescEnvio', pago.pago_desc AS 'PagoDesc', usuario.us_name AS 'UserName', usuario.us_tel AS 'UserTel', usuario.us_dire AS 'UserDire' FROM comanda INNER JOIN envio ON comanda.com_env_iden = envio.env_iden JOIN pago ON comanda.com_pago_iden = pago.pago_iden JOIN usuario ON comanda.com_us_iden = usuario.us_iden JOIN estadocom ON comanda.com_escom_iden = estadocom.escom_iden WHERE com_date = ?",
      [req.params.Date]
    );
    return res.json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/Api/Comandas/:IDUser/:Date", async (req, res) => {
  try {
    const promisePool = pool.promise();
    const [rows] = await promisePool.query(
      "SELECT * FROM comanda WHERE com_us_iden = ? AND com_date = ?",
      [req.params.IDUser, req.params.Date]
    );
    return res.json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/Api/Comanda", async (req, res) => {
  try {
    const {
      com_carrito,
      com_date,
      com_hora,
      com_env_iden,
      com_pago_iden,
      com_precioEnvio,
      com_us_iden,
      com_exep,
    } = req.body;
    const promisePool = pool.promise();
    await promisePool.query(
      "INSERT INTO comanda (com_carrito, com_date, com_hora, com_env_iden, com_pago_iden, com_precioEnvio, com_us_iden, com_exep) VALUES (?,?,?,?,?,?,?,?)",
      [
        com_carrito,
        com_date,
        com_hora,
        com_env_iden,
        com_pago_iden,
        com_precioEnvio,
        com_us_iden,
        com_exep,
      ]
    );
    return res.json();
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.put("/Api/Comanda/:ID", async (req, res) => {
  try {
    const { com_escom_iden } = req.body;
    const promisePool = pool.promise();
    await promisePool.query(
      "UPDATE comanda SET com_escom_iden = ? WHERE com_iden = ?",
      [com_escom_iden, req.params.ID]
    );
    return res.json();
  } catch (error) {
    return res.status(500).json(error);
  }
});

export default router;
