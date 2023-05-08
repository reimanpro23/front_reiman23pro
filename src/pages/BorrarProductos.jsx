import axios from "axios";
import React, { useState, useEffect } from "react";
import TablaProductos from "../componentes/TablaProductos";
import "./Borrar.css";


const BorrarProductos = () => {
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
          process.env.REACT_APP_BACKEND_URL + "/api/tienda/productos/:id"
        );
        // const res = await axios.get('http://localhost:5000/api/productos');
        setDatos(res.data.productos);
      } else {
        // const res = await axios.delete(
        //   process.env.REACT_APP_BACKEND_URL + `/api/tienda/productos/buscar/:busca${query}`
        // );
        // setDatos(res.data.productos);
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
      <TablaProductos datos={datos} />
    </div>
  );
};

export default BorrarProductos;
