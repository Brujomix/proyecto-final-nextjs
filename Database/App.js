import express from "express";
import cors from "cors";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

import StartServer from "./Routes/StartServer.js";
import Estado from "./Routes/Estado.js";
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

const __dirname = dirname(fileURLToPath(import.meta.url));
App.use(express.static(path.join(__dirname, "build")));

App.use(StartServer);
App.use(Estado);
App.use(Categorias);
App.use(Usuarios);
App.use(MetodoPago);
App.use(PrecioEnvio);
App.use(Productos);
App.use(Comandas);
App.use(Mercadopago);
App.use(Deliverys);

App.listen(PORT, () => console.log("MySql Server Ready"));
