import { Router } from "express";
import { pool } from "../configDB.js";

const router = Router();

/* Modifica Precio por Categoria */

router.put("/Api/Productos/AumentaPrecio", async (req, res) => {
  try {
    const { porcentaje, pro_cat_iden } = req.body;
    const promisePool = pool.promise();
    await promisePool.query(
      "UPDATE producto SET pro_precio = pro_precio + (pro_precio * ? / 100) WHERE pro_cat_iden = ?",
      [porcentaje, pro_cat_iden]
    );

    return res.json();
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/Api/Productos/DisminuyePrecio", async (req, res) => {
  try {
    const { porcentaje, pro_cat_iden } = req.body;
    const promisePool = pool.promise();
    await promisePool.query(
      "UPDATE producto SET pro_precio = pro_precio - (pro_precio * ? / 100) WHERE pro_cat_iden = ?",
      [porcentaje, pro_cat_iden]
    );

    return res.json();
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/Api/Productos", async (req, res) => {
  try {
    const promisePool = pool.promise();
    const [rows] = await promisePool.query("SELECT * FROM producto ORDER BY pro_cat_iden ASC");
    return res.json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/Api/Producto/:ID", async (req, res) => {
  try {
    const promisePool = pool.promise();
    const [rows] = await promisePool.query(
      "SELECT * FROM producto WHERE pro_iden = ?",
      [req.params.ID]
    );
    return res.json(rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
});


router.get("/Api/Producto/:ID", async (req, res) => {
  try {
    const promisePool = pool.promise();
    const [rows] = await promisePool.query(
      "SELECT * FROM producto WHERE pro_iden = ?",
      [req.params.ID]
    );
    return res.jsonp(rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/Api/Productos/:Categoria", async (req, res) => {
  try {
    const promisePool = pool.promise();
    const [rows] = await promisePool.query(
      "SELECT * FROM producto WHERE pro_cat_iden = ?",
      [req.params.Categoria]
    );
    return res.json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/Api/ProductosRanking", async (req, res) => {
  try {
    const promisePool = pool.promise();
    const [rows] = await promisePool.query(
      "SELECT * FROM producto WHERE pro_puntos > 50",
      [req.params.Categoria]
    );
    return res.json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/Api/Producto/:ID", async (req, res) => {
  try {
    const promisePool = pool.promise();
    await promisePool.query(
      "UPDATE producto SET ? WHERE pro_iden = ?",
      [req.body, req.params.ID]
    );
    return res.json();
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/Api/Producto", async (req, res) => {
  try {
    const {
      pro_imagen,
      pro_name,
      pro_desc,
      pro_precio,
      pro_cat_iden,
    } = req.body;
    const promisePool = pool.promise();
    await promisePool.query(
      "INSERT INTO producto (pro_imagen, pro_name, pro_desc, pro_precio, pro_cat_iden) VALUES (?,?,?,?,?)",
      [
        pro_imagen,
        pro_name,
        pro_desc,
        pro_precio,
        pro_cat_iden,
      ]
    );
    return res.json();
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/Api/Producto/:ID", async (req, res) => {
  try {
    const promisePool = pool.promise();
    await promisePool.query(
      "DELETE FROM producto WHERE pro_iden = ?",
      [req.params.ID]
    );
    return res.json();
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
