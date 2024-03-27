import { Router } from "express";
import { pool } from "../configDB.js";

const router = Router();

router.get("/Api/Encender", async (req, res) => {
  try {
    const promisePool = pool.promise();
    const [rows] = await promisePool.query("SELECT * FROM encender");
    return res.json(rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/Api/Encender", async (req, res) => {
  try {
    const { enc_desc } = req.body;
    const promisePool = pool.promise();
    const [rows]=await promisePool.query(
      "UPDATE encender SET enc_desc = ? WHERE enc_iden = 1",
      [enc_desc]
    );
    return res.json(rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
