import { Router } from "express";
import { pool } from "../configDB.js";
import crypto from "crypto";

const router = Router()

/* Validar Contraseña Admin */

router.post("/Api/ValidarAdmin", async (req, res) => {
    try {
      const { admin_cuit, admin_pass } = req.body;
      const promisePool = pool.promise();
      const [rows] = await promisePool.query(
        "SELECT * FROM admin WHERE admin_cuit = ?",
        [admin_cuit]
      );
      if (rows.length === 0) {
        return res.status(401).json({ error: "Usuario Inexistente" });
      }
  
      const storedHash = rows[0].admin_pass;
      const userHash = crypto.createHash("sha1").update(admin_pass).digest("hex");
  
      if (userHash === storedHash) {
        res.json(rows);
      } else {
        return res.status(401).json({ error: "Credenciales inválidas" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  /* Validar Admin LocalStorage */
  router.post("/Api/AdminLS", async (req, res) => {
    try {
      const { admin_cuit, admin_pass } = req.body;
      const promisePool = pool.promise();
      const [rows] = await promisePool.query(
        "SELECT * FROM admin WHERE admin_cuit = ?",
        [admin_cuit]
      );
      if (rows.length === 0) {
        return res.status(401).json({ error: "Usuario Inexistente" });
      }
  
      if (rows[0].admin_pass === admin_pass) {
        return res.status(200).json({ error: "Login Correcto" });
      } else {
        return res.status(401).json({ error: "Credenciales inválidas" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  /* Rutas CRUD Administradores */
  
  router.get("/Api/Administradores", async (req, res) => {
    try {
      const promisePool = pool.promise();
      const [rows] = await promisePool.query("SELECT * FROM admin ");
      return res.json(rows);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  router.post("/Api/Administrador", async (req, res) => {
    try {
      const { admin_name, admin_email, admin_pass, admin_cuit, admin_dire } = req.body;
      const promisePool = pool.promise();
      const [rows] = await promisePool.query(
        "INSERT INTO admin (admin_name, admin_email, admin_pass, admin_cuit, admin_dire) VALUES (?,?,SHA(?),?,?)",
        [admin_name, admin_email, admin_pass, admin_cuit, admin_dire]
      );
      return res.json(rows);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  router.put("/Api/Administrador/:ID", async (req, res) => {
    try {
      const promisePool = pool.promise();
      const [rows] = await promisePool.query(
        "UPDATE admin SET ? WHERE admin_iden = ?",
        [req.body, req.params.ID]
      );
      return res.json(rows);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  router.get("/Api/Administrador/:Cuit", async (req, res) => {
    try {
      const promisePool = pool.promise();
      const [rows] = await promisePool.query(
        "SELECT * FROM admin WHERE admin_cuit = ?",
        [req.params.Cuit]
      );
      return res.json(rows);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
  router.delete("/Api/Administrador/:Cuit", async (req, res) => {
    try {
      const promisePool = pool.promise();
      const [rows] = await promisePool.query(
        "DELETE FROM admin WHERE admin_cuit = ?",
        [req.params.Cuit]
      );
      return res.json(rows);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  export default router;
  