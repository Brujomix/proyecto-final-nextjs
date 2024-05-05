import { Router } from "express";
import { pool } from "../configDB.js";

const router = Router();

router.get("/Api/Pagos", async (req, res) => {
  try {
    const promisePool = pool.promise();
    const [rows] = await promisePool.query("SELECT * FROM pago");
    return res.json(rows);
  } catch (error) {
    res.status(500).json( error );
  }
});

router.get("/Api/Pago/:ID", async (req, res)=> {
	try{	
	const promisePool = pool.promise();
	const [rows] = await promisePool.query
	("SELECT * FROM pago WHERE pago_iden = ?",
	 [req.params.ID]
	);
	return res.json(rows[0])
	}catch (error){
	res.status(500).json(error)
	}

})

router.put("/Api/Pago/:ID", async (req, res) => {
  try {
    const promisePool = pool.promise();
    await promisePool.query(
      "UPDATE pago SET ? WHERE pago_iden = ?",
      [req.body, req.params.ID]
    );
    return res.json();
  } catch (error) {
    res.status(500).json( error );
  }
});

router.post("/Api/Pago", async (req, res) => {
  try {
    const {categoria_desc} = req.body;
    const promisePool = pool.promise();
    await promisePool.query(
      "INSERT INTO pago (pago_desc) VALUES (?)",
      [categoria_desc]
    );
    return res.json();
  } catch (error) {
    res.status(500).json( error );
  }
});

router.delete("/Api/Pago/:ID", async (req, res) => {
    try {
      const promisePool = pool.promise();
      await promisePool.query(
        "DELETE FROM pago WHERE pago_iden = ?", [req.params.ID]);
      return res.json();
    } catch (error) {
      res.status(500).json( error );
    }
  });

export default router;
