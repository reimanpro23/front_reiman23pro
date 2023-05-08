import React from "react";
import { useNavigate } from "react-router-dom";

const Contactos = () => {
  const navigate = useNavigate();

  const gestorCerrar = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Contactos</h1>

      <h3>Reinhard Martin</h3>
      <p>Las Palmas Gran Canaria.Spain</p>

      <h3>Manuel Belmonte</h3>
      <p>Valencia. Valencia.Spain</p>
      
      <button onClick={gestorCerrar}>Cerrar</button>
      
    </div>
  );
};

export default Contactos;
