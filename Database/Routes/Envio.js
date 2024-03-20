import { Router } from "express";
import { pool } from "../configDB.js";

const router = Router();

router.get("/Api/Envios", async (req, res) => {
  try {
    const promisePool = pool.promise();
    const [rows] = await promisePool.query("SELECT * FROM envio");
    return res.json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/Api/Envio/:ID", async (req, res) => {
  try {
    const promisePool = pool.promise();
    const [rows] = await promisePool.query(
      "SELECT * FROM envio WHERE env_iden = ?",
      [req.params.ID]
    );
    return res.json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/Api/Envio/:ID", async (req, res) => {
  try {
    const promisePool = pool.promise();
    await promisePool.query(
      "UPDATE envio SET ? WHERE env_iden = ?",
      [req.body, req.params.ID]
    );
    return res.json();
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/Api/Envio", async (req, res) => {
  try {
    const { categoria_desc } = req.body;
    const promisePool = pool.promise();
    await promisePool.query(
      "INSERT INTO envio (env_desc) VALUES (?)",
      [categoria_desc]
    );
    return res.json();
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/Api/Envio/:ID", async (req, res) => {
  try {
    const promisePool = pool.promise();
    await promisePool.query(
      "DELETE FROM envio WHERE env_iden = ?",
      [req.params.ID]
    );
    return res.json();
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
