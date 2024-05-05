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

router.get("/Api/Delivery/:ID", async(req, res)=>{
  try{
    const promisePool = pool.promise();
    const [rows] = await promisePool.query("SELECT * FROM delivery WHERE del_iden = ?", 
    [req.params.ID])
    return res.json(rows[0])
  } catch(error){
    res.status(500).json(error)
}
});

router.post("/Api/Delivery", async (req, res) => {
  try {
    const { del_desc } = req.body;
    const promisePool = pool.promise();
    await promisePool.query("INSERT INTO delivery (del_desc) VALUES (?)", [del_desc]);
    return res.json();
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/Api/Delivery/:ID", async (req, res) => {
  try {
    const promisePool = pool.promise();
    await promisePool.query("UPDATE delivery SET ? WHERE del_iden = ?", 
    [req.body, req.params.ID]);
    return res.json();
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/Api/Delivery/:ID", async (req, res) => {
  try {
    const promisePool = pool.promise();
    await promisePool.query("DELETE FROM delivery WHERE del_iden = ?",
    [req.params.ID]);
    return res.json();
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
