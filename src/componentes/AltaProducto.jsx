import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Image } from "cloudinary-react"; // ? Instalar cloudinary-react e importar el/los componentes necesarios
import './style.css'

const AltaProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [urlImagen, setUrlImagen] = useState(""); // ? Añadir para gestionar imágenes

  const extraerDatosDeUsuario = () => {
    const datosRecuperar = JSON.parse(localStorage.getItem("datosUsuario"));
    if (datosRecuperar && datosRecuperar.token) {
      // Si existe algo que recuperar y dentro de lo recuperado existe la propiedad token
      console.log(datosRecuperar.token);
      return [datosRecuperar.token, datosRecuperar.userId];
    }
  };

  const gestorFormulario = async (data) => {
    console.log(extraerDatosDeUsuario());
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/tienda/productos/", {
        nombreProducto: data.nombreProducto,
        descripcion: data.descripcion,
        imagen: data.imagen,
        precio: data.precio,
        usuario:extraerDatosDeUsuario()[1],
       
        
      },
      {
        headers: {
          Authorization: "Bearer " + extraerDatosDeUsuario()[0], // En los headers van 'Bearer ' + token recibido
        },
      }
      )
      .then((response) => {
        console.log("Todo correcto", response.data);
      })
      .catch((error) => console.log(error.response.data));
  };

  const subeImagen = (e) => {
    const imagen = e.target.files[0];
    console.log(imagen);

    const formImagen = new FormData();
    formImagen.append("file", imagen);
    formImagen.append("upload_preset", "ddcu4b7d");

    axios
      .post("https://api.cloudinary.com/v1_1/franio/image/upload", formImagen)
      // ? Añadir setUrlImagen para cargar la URL de la imagen en Cloudinary
      .then((res) => {
        setUrlImagen(res.data.url);
        console.log(urlImagen);
      });
  };

  return (
    <div className="temp">
      <Image
        cloudName="franio"
        // ! Muestra una de las imágenes que tengo en mi colección
        publicId={urlImagen} // ? Indicar la URL de la imagen en CLoudinary
      />
    <div className="Form">
      <div className="title">Crea tu producto</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(gestorFormulario)}>
          <input
            type="text"
            name="producto"
            placeholder="Nombre de Producto"
            {...register("producto")}
          />
          {errors.nombre && <p>{errors.nombre.message}</p>}
          <input
            type="text"
            name="descripcion"
            placeholder="Descripcion"
            {...register("descripcion")}
          />
          {errors.nombre && <p>{errors.nombre.message}</p>}
          
          <input
            type="text"
            name="foto"
            placeholder="Imagen del producto"
            {...register("foto")}
          />
          {errors.nombre && <p>{errors.nombre.message}</p>}
          
          <input
            type="number"
            name="precio"
            placeholder="Precio del producto"
            {...register("precio")}
          />
          {errors.precio && <p>{errors.precio.message}</p>}
          <input
            type="text"
            name="usuario"
            placeholder="Seleccione Usuario..."
            {...register("usuario")}
          />
           {errors.docente && <p>{errors.docente.message}</p>}
          
          <div className="submit">
            <input type="submit" value="Crear" id="submit" />
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default AltaProducto;
