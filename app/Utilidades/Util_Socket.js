import { io } from "socket.io-client";
import { UrlServer_nube } from "./UrlServer";

export const socket = io(`${UrlServer_nube}`);

