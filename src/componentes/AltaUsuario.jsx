import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import './style.css'

const AltaUsuario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const gestorFormulario = async (data) => {
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/tienda/usuarios", {
        nombreUsuario: data.nombreUsuario,
        cif: data.cif,
        email: data.email,
        password: data.password,
        direccion: data.direccion,
        productos: data.productos,
        
      })
      .then((response) => {
        console.log("Todo correcto", response.data);
      })
      .catch((error) => console.log(error.response.data));
  };

  return (
    <div className="Form">
      <div className="title">Crea tu cuenta</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(gestorFormulario)}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre de Usuario"
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
            name="cif"
            placeholder="CIF"
            {...register("cif", {pattern: ('^([ABCDFGHJKLMNPQRSUVWabcdfghlmnpqrsuvw])([0-9]{7})([0-9A-Ja]$'),maxLength: 9, required: true })}
          />
          {errors.cif && errors.cif.type === "required" && (
            <p>Campo requerido</p>
          )}
          {errors.cif && errors.cif.type === "minLength" && (
            <p>Debe tener 9 caracteres, incluyendo la letra</p>
          )}
          <input
            type="text"
            name="email"
            placeholder="Email"
            {...register("email", {
              pattern:
                /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/,
              required: true,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p>Campo email requerido</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p>Formato de email incorrecto</p>
          )}
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            {...register("password", { pattern: /^(?=^[ -~]{6,64}$)(?=.*([a-z][A-Z]))(?=.*[0-9])(.*[ -/|:-@|[-`|{-~]).+$/, required: true, minLength: 8, maxLength: 64 })}
          />
          {errors.password && errors.password.type === "required" && (
            <p>Campo password requerido</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p>La contraseña debe tener como mínimo 6 y maximo 64 caracteres</p>
          )}
          <input
            type="text"
            name="direccion"
            placeholder="Direccion"
            {...register("direccion", { minLength: 5, required: true })}
          />
          {errors.direccion && errors.direccion.type === "required" && (
            <p>Campo requerido</p>
          )}
          {errors.direccion && errors.direccion.type === "minLength" && (
            <p>Debe tener al menos 5 caracteres</p>
          )}
          <input
            type="text"
            name="productos"
            placeholder="Producto"
            {...register("productos", { minLength: 5 })}
          />
          {/* {errors.direccion && errors.direccion.type === "required" && (
            <p>Campo requerido</p>
          )} */}
          {errors.direccion && errors.direccion.type === "minLength" && (
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

export default AltaUsuario;
