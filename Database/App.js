import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

import StartServer from "./Routes/StartServer.js";
import Encender from "./Routes/Encender.js";
import Categorias from "./Routes/Categorias.js";
import Usuarios from "./Routes/Usuario.js";
import MetodoPago from "./Routes/MetodoPago.js";
import PrecioEnvio from "./Routes/Envio.js";
import Productos from "./Routes/Productos.js";
import Comandas from "./Routes/Comanda.js";
import Mercadopago from "./Routes/Payment_MP.js";
import Deliverys from "./Routes/Deliverys.js";

const PORT = 4000;

const App = express();
App.use(cors());
App.use(express.json());

const server = http.createServer(App);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("cambiarEstado", (nuevoEstado) => {
    // Cambia el estado de la app de encendido a apagado
    socket.emit("estadoActualizado", nuevoEstado);
  });
});

const __dirname = dirname(fileURLToPath(import.meta.url));
App.use(express.static(path.join(__dirname, "build")));

App.use(StartServer);
App.use(Encender);
App.use(Categorias);
App.use(Usuarios);
App.use(MetodoPago);
App.use(PrecioEnvio);
App.use(Productos);
App.use(Comandas);
App.use(Mercadopago);
App.use(Deliverys);

server.listen(PORT, () => console.log("MySql Server Ready"));
