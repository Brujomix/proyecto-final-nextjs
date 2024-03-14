import { Router } from "express";
import { pool } from "../configDB.js";
import crypto from "crypto";

const router = Router();

/* Validar Usuario LocalStorage */

router.post("/Api/UserLS", async (req, res) => {
  try {
    const { us_email, us_pass } = req.body;
    const promisePool = pool.promise();
    const [rows] = await promisePool.query(
      "SELECT * FROM usuario WHERE us_email = ?",
      [us_email]
    );
    if (rows.length === 0) {
      return res.status(401).json({ error: "Usuario Inexistente" });
    }

    if (rows[0].us_pass === us_pass) {
      return res.status(200).json({ error: "Login Correcto" });
    } else {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

/* Valida Contraseña Usuario */
router.post("/Api/ValidarUsuario", async (req, res) => {
  try {
    const { us_email, us_pass } = req.body;
    const promisePool = pool.promise();
    const [rows] = await promisePool.query(
      "SELECT * FROM usuario WHERE us_email = ?",
      [us_email]
    );
    if (rows.length === 0) {
      return res.status(401).json({ error: "Usuario Inexistente" });
    }

    const storedHash = rows[0].us_pass;
    const userHash = crypto.createHash("sha1").update(us_pass).digest("hex");

    if (userHash === storedHash) {
      return res.json(rows);
    } else {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

/* Rutas CRUD Usuarios */

router.get("/Api/Usuarios", async (req, res) => {
  try {
    const promisePool = pool.promise();
    const [rows] = await promisePool.query("SELECT * FROM usuario");
    return res.json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/Api/Usuario/:Email", async (req, res) => {
  try {
    const promisePool = pool.promise();
    const [rows] = await promisePool.query(
      "SELECT * FROM usuario WHERE us_email = ?",
      [req.params.Email]
    );
    return res.json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/Api/Usuario", async (req, res) => {
  try {
    const { us_email, us_pass, us_dire, us_name, us_tel } = req.body;
    const promisePool = pool.promise();
    const [rows] = await promisePool.query(
      "INSERT INTO Usuario (us_email, us_pass, us_dire, us_name, us_tel) VALUES (?,SHA(?),?,?,?)",
      [us_email, us_pass, us_dire, us_name, us_tel]
    );
    return res.json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/Api/Usuario", async (req, res) => {

  try {
    const { us_tel, us_dire, us_name, us_email, us_pass, us_iden } = req.body;
    const promisePool = pool.promise();
    const [rows] = await promisePool.query(
      "UPDATE usuario SET us_tel = ?, us_dire = ?, us_name = ?, us_email = ?, us_pass = SHA(?) WHERE us_iden = ?",
      [ us_tel, us_dire, us_name, us_email, us_pass, us_iden]
    );
      return res.json(rows)
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/Api/Usuario/:ID", async (req, res) => {
  try {
    const promisePool = pool.promise();
    const [rows] = await promisePool.query(
      "DELETE FROM Usuario WHERE us_iden = ?",
      [req.params.ID]
    );
    return res.json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
});


export default router;