import axios from "axios";
import React, { useState, useEffect } from "react";
import TablaUsuarios from "../componentes/TablaUsuarios";
import "./Buscar.css";

const BuscarUsuarios = () => {
  const [query, setQuery] = useState("");
  const [datos, setDatos] = useState([]);

  const gestorBusca = (e) => {
    setQuery(e.target.value);
  };

  //   const gestorTecla = (e) => {
  //     const tecla = e.target.value;
  //     console.log(tecla);
  //   };

  useEffect(() => {
    const recupera = async () => {
      if (query.length === 0) {
        const res = await axios.get(
          process.env.REACT_APP_BACKEND_URL + "/api/tienda/usuarios"
        );
        
        setDatos(res.data.usuarios);
      } else {
        const res = await axios.get(
          process.env.REACT_APP_BACKEND_URL + `/api/tienda/usuarios/buscar/:busca${query}`
        );
        setDatos(res.data.usuarios);
      }
      console.log(datos);
    };
    recupera();
  }, [query]);

  return (
    <div className="seccionBuscar">
      <input
        className="buscar"
        type="text"
        name="busca"
        placeholder="buscar"
        onChange={gestorBusca}
        // onKeyDown={gestorTecla}
      />
      <TablaUsuarios datos={datos} />
    </div>
  );
};

export default BuscarUsuarios;
