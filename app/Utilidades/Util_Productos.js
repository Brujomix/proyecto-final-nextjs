export const crearUrlImagen = (urlWebP, formatoSalida) => {
  return new Promise((res) => {
    const imagen = new Image();
    imagen.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = imagen.width;
      canvas.height = imagen.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(imagen, 0, 0);
      const dataPng = canvas.toDataURL(formatoSalida);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      res(dataPng);
    };
    imagen.src = urlWebP;
  });
};

export const handleInputChange = (event) => {
  return new Promise((res) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    try {
      reader.onload = async function (e) {
        const resp = await crearUrlImagen(e.target.result, "image/webp");
        res(resp);
      };
    } catch (error) {
      console.log(error);
      res("/imgProducto.png");
    }

    reader.readAsDataURL(file);
  });
};