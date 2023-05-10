import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Image } from "cloudinary-react"; // ? Instalar cloudinary-react e importar el/los componentes necesarios
import './style.css'

const AltaUsuario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [urlImagen, setUrlImagen] = useState(""); // ? Añadir para gestionar imágenes

  const extraerDatosDeProducto = () => {
    const datosRecuperar = JSON.parse(localStorage.getItem("datosProducto"));
    if (datosRecuperar && datosRecuperar.token) {
      // Si existe algo que recuperar y dentro de lo recuperado existe la propiedad token
      console.log(datosRecuperar.token);
      return [datosRecuperar.token, datosRecuperar.userId];
    }
  };

  const gestorFormulario = async (data) => {
    console.log(extraerDatosDeProducto());
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/tienda/usuarios/", {
        nombreUsuario: data.nombreUsuario,
        cif: data.cif,
        email: data.email,
        password: data.password,
        direccion: data.direccion,
        productos: extraerDatosDeProducto()[1],
        
      },
      {
        headers: {
          Authorization: "Bearer " + extraerDatosDeProducto()[0], // En los headers van 'Bearer ' + token recibido
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
      <div className="title">Crea tu cuenta</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(gestorFormulario)}>
          <input
            type="text"
            name="nombreUsuario"
            placeholder="Nombre de Usuario"
            {...register("nombreUsuario")}
          />
           {errors.nombreUsuario && <p>{errors.nombreUsuario.message}</p>}
          <input
            type="text"
            name="cif"
            placeholder="CIF"
            {...register("cif")}
          />
          {errors.cif && <p>{errors.cif.message}</p>}
          
          <input
            type="text"
            name="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
          
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
          
          <input
            type="text"
            name="direccion"
            placeholder="Direccion"
            {...register("direccion")}
          />
          {errors.direccion && <p>{errors.direccion.message}</p>}
          
          <input
            type="text"
            name="productos"
            placeholder="Producto"
            {...register("productos")}
          />
          {errors.productos && <p>{errors.productos.message}</p>}
          
          <div className="submit">
            <input type="submit" value="Crear" id="submit" />
          </div>
        </form>
        </div> 
      </div>
    </div>
  );
};

export default AltaUsuario;
