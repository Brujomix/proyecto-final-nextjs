import { Router } from "express";
import { pool } from "../configDB.js";

const router = Router();

router.get("/Api/Deliverys", async (req, res) => {
  try {
    const promisePool = pool.promise();
    const [rows] = await promisePool.query("SELECT * FROM delivery");
    return res.json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;