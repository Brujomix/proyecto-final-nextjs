import { io } from "socket.io-client";
import { putEstado } from "@/app/Api/EstadoAppApi/route";

export const cambiarEstadoApp = async (enc_desc) => {
  const socket = io("localhost:4000");
  try {
    await putEstado(!enc_desc).then((res) => {
      if (res.status === 200) {
        socket.emit("cambiarEstado", { Estado: !enc_desc });
        socket.off("cambiarEstado");
        console.log("estado Actualizado");
      } else console.log("no pudimos actualizar el estado ");
    });
  } catch (error) {
    console.log(error);
  }
};
