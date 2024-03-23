import { Router } from "express";
import { pool } from "../configDB.js";
import crypto from "crypto";

const router = Router();

/* Validar Usuario LocalStorage */

router.post("/Api/UserLS", async (req, res) => {
  try {
    const { us_email } = req.body;
    const promisePool = pool.promise();
    const [rows] = await promisePool.query(
      "SELECT * FROM usuario WHERE us_email = ?",
      [us_email]
    );

    const objStorage = rows[0];
    for (let key of req.body) {
      if (req.body[key] !== objStorage[key]) {
        return res.status(200).json({ message: "Verificado" });
      } else {
        return res.status(401).json({ message: "No Verificado" });
      }
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
    const storedHash = rows[0].us_pass;
    const userHash = crypto.createHash("sha1").update(us_pass).digest("hex");

    if (userHash === storedHash) {
      return res.json(rows);
    } else {
      return res.status(401).json({ message: "Revisa las Credenciales" });
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
    return res.json(rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/Api/UsuarioById/:ID", async (req, res) => {
  try {
    const promisePool = pool.promise();
    const [rows] = await promisePool.query(
      "SELECT * FROM usuario WHERE us_iden = ?",
      [req.params.ID]
    );
    return res.json(rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/Api/Usuario", async (req, res) => {
  try {
    const { us_email, us_pass, us_dire, us_name, us_tel, us_ro_iden } =
      req.body;
    const promisePool = pool.promise();
    await promisePool.query(
      "INSERT INTO Usuario (us_email, us_pass, us_dire, us_name, us_tel, us_ro_iden) VALUES (?,SHA(?),?,?,?,?)",
      [us_email, us_pass, us_dire, us_name, us_tel, us_ro_iden]
    );
    return res.json();
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/Api/Usuario", async (req, res) => {
  try {
    const { us_tel, us_dire, us_name, us_email, us_pass, us_iden } = req.body;
    const promisePool = pool.promise();
    await promisePool.query(
      "UPDATE usuario SET us_tel = ?, us_dire = ?, us_name = ?, us_email = ?, us_pass = SHA(?) WHERE us_iden = ?",
      [us_tel, us_dire, us_name, us_email, us_pass, us_iden]
    );
    return res.json({ message: "Usuario Actualizado" });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/Api/Usuario/:ID", async (req, res) => {
  try {
    const promisePool = pool.promise();
    await promisePool.query("DELETE FROM Usuario WHERE us_iden = ?", [
      req.params.ID,
    ]);
    return res.json({ message: "Usuario Eliminado" });
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
