import { Router } from "express";

const router = Router();

router.get("/Api/Estado", (req,res)=>{
    return res.json("Server Iniciado");
})

router.get("/", (req,res)=>{
    return res.json({Server: "Iniciado", PORT: 4000});
})

export default router