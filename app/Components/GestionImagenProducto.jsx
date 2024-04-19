import React from "react";
import Imagen from "next/image";
import { BotonDinamico } from "@/app/Components";
import { CiImageOff } from "react-icons/ci";
import { handleInputChange } from "../Utilidades/Util_Productos";

export function GestionImagenProducto({inputRef}) {

  return (
    <div>
      <BotonDinamico onClick={() => handleInputChange()}>
       <CiImageOff size={120}/> 
      </BotonDinamico>
    </div>
  );
}

/* 
onChange={(e) => {
                const reader = new FileReader();
                reader.onload = function (event) {
                  const img = new Image();

                  img.onload = function () {
                    const canvas = document.createElement("canvas");
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const context = canvas.getContext("2d");
                    context.drawImage(img, 0, 0, img.width, img.height);

                    const webpDataURL = canvas.toDataURL("image/webp");
             

                    setFieldValue("pro_imagen", webpDataURL);
                  };
                  img.src = event.target.result;
                };
                reader.readAsDataURL(e.target.files[0]);
              }}
*/
