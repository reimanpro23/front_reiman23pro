import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import './style.css'

const AltaProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const gestorFormulario = async (data) => {
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/tienda/productos/", {
        nombreProducto: data.nombreProducto,
        descripcion: data.descripcion,
        imagen: data.imagen,
        precio: data.precio,
       
        
      })
      .then((response) => {
        console.log("Todo correcto", response.data);
      })
      .catch((error) => console.log(error.response.data));
  };

  return (
    <div className="Form">
      <div className="title">Crea tu producto</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(gestorFormulario)}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre de Producto"
            {...register("nombre", { minLength: 5, required: true })}
          />
          {errors.nombre && errors.nombre.type === "required" && (
            <p>Campo requerido</p>
          )}
          {errors.nombre && errors.nombre.type === "minLength" && (
            <p>Debe tener al menos 5 caracteres</p>
          )}
          <input
            type="text"
            name="descripcion"
            placeholder="Descripcion"
            {...register("descripcion", {minLength: 5, required: true })}
          />
          {errors.descripcion && errors.descripcion.type === "required" && (
            <p>Campo requerido</p>
          )}
          {errors.descripcion && errors.descripcion.type === "minLength" && (
            <p>Debe tener 5 caracteres como minimo</p>
          )}
          <input
            type="imagen"
            name="foto"
            placeholder="Imagen"
            {...register("imagen", {
              required: true,
            })}
          />
          {errors.foto && errors.foto.type === "required" && (
            <p>Campo imagen requerido</p>
          )}
          {errors.foto && errors.foto.type === "pattern" && (
            <p>Formato de imagen incorrecto</p>
          )}
          <input
            type="text"
            name="precio"
            placeholder="Precio"
            {...register("precio", { minLength: 3, required: true })}
          />
          {errors.precio && errors.precio.type === "required" && (
            <p>Campo requerido</p>
          )}
          {errors.precio && errors.precio.type === "minLength" && (
            <p>Debe tener al menos 5 caracteres</p>
          )}
          <div className="submit">
            <input type="submit" value="Crear" id="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AltaProducto;
