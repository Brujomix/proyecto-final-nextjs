
export const handleInputChange = (event) => {
    try {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onprogress = function (event) {
          if (reader.readyState === FileReader.LOADING) {
            setIsLoad(true);
          }
        };
        reader.onload = async function (e) {
          await crearUrlImagen(e.target.result, "image/webp").then((res) => {
            return res
          });
        };
    
        reader.readAsDataURL(file);
    } catch (error) {
        console.log(error);
        return "/imgProducto.png"
    }
  };