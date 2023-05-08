import axios from "axios";
import React, { useState, useEffect } from "react";
import TablaUsuarios from "../componentes/TablaUsuarios";
import "./Borrar.css";


const BorrarUsuarios = () => {
  const [query, setQuery] = useState("");
  const [datos, setDatos] = useState([]);

  const gestorBorra = (e) => {
    setQuery(e.target.value);
  };

    // const gestorTecla = (e) => {
    //   const tecla = e.target.value;
    //   console.log(tecla);
    // };

  useEffect(() => {
    const elimina = async () => {
      if (query.length === 0) {
        const res = await axios.delete(
          process.env.REACT_APP_BACKEND_URL + "/api/tienda/usuarios/:id"
        );
        // const res = await axios.get('http://localhost:5000/api/usuarios');
        setDatos(res.data.usuarios);
      } else {
        // const res = await axios.delete(
        //   process.env.REACT_APP_BACKEND_URL + `/api/tienda/usuarios/buscar/:busca${query}`
        // );
        // setDatos(res.data.usuarios);
      }
      console.log(datos);
    };
    elimina();
  }, [query]);

  return (
    <div className="seccionBorrar">
      <input
        className="borrar"
        type="text"
        name="borra"
        placeholder="borrar"
        onChange={gestorBorra}
        // onKeyDown={gestorTecla}
      />
      <TablaUsuarios datos={datos} />
    </div>
  );
};

export default BorrarUsuarios;
