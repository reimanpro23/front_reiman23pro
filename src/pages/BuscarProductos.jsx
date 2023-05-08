import axios from "axios";
import React, { useState, useEffect } from "react";
import TablaProductos from "../componentes/TablaProductos";
import "./Buscar.css";

const BuscarProductos = () => {
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
          process.env.REACT_APP_BACKEND_URL + "/api/tienda/productos"
        );
        // const res = await axios.get('http://localhost:5000/api/productos');
        setDatos(res.data.productos);
      } else {
        const res = await axios.get(
          process.env.REACT_APP_BACKEND_URL + `/api/tienda/productos/buscar/:busca${query}`
        );
        setDatos(res.data.productos);
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
      <TablaProductos datos={datos} />
    </div>
  );
};

export default BuscarProductos;
