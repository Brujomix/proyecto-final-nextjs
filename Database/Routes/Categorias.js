import { Router } from "express";
import { pool } from "../configDB.js";

const router = Router();

router.get("/Api/Categorias", async (req, res) => {
  try {
    const promisePool = pool.promise();
    const [rows] = await promisePool.query("SELECT * FROM categoria");
    return res.json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/Api/Categoria/:ID", async (req, res) => {
  try {
    const promisePool = pool.promise();
    const [rows] = await promisePool.query(
      "SELECT * FROM categoria WHERE cat_iden = ?",
      [req.params.ID]
    );
    return res.json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/Api/Categoria/:ID", async (req, res) => {
  try {
    const promisePool = pool.promise();
    await promisePool.query(
      "UPDATE categoria SET ? WHERE cat_iden = ?",
      [req.body, req.params.ID]
    );
    return res.json();
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/Api/Categoria", async (req, res) => {
  try {
    const { cat_desc } = req.body;
    const promisePool = pool.promise();
    await promisePool.query(
      "INSERT INTO categoria (cat_desc) VALUES (?)",
      [cat_desc]
    );
    return res.json();
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/Api/Categoria/:ID", async (req, res) => {
  try {
    const promisePool = pool.promise();
    await promisePool.query(
      "DELETE FROM categoria WHERE cat_iden = ?",
      [req.params.ID]
    );
    return res.json();
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
