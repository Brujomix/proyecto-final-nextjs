import { Router } from "express";
import { pool } from "../configDB.js";

const router = Router();

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
      "SELECT * FROM comanda WHERE com_date = ?",
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
      com_entrega,
        com_exep,
    } = req.body;
    const promisePool = pool.promise();
    const [rows] = await promisePool.query(
      "INSERT INTO comanda (com_carrito, com_date, com_hora, com_env_iden, com_pago_iden, com_precioEnvio,com_us_iden, com_entrega, com_exep) VALUES (?,?,?,?,?,?,?,?,?)",
      [
        com_carrito,
        com_date,
        com_hora,
        com_env_iden,
        com_pago_iden,
        com_precioEnvio,
        com_us_iden,
        com_entrega,
        com_exep,
      ]
    );
    return res.json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/Api/Comanda/:ID", async (req, res) => {
  try {
    const promisePool = pool.promise();
    const [rows] = await promisePool.query(
      "DELETE FROM comanda WHERE com_iden = ?",
      [req.params.ID]
      );
    return res.json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
