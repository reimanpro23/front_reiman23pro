import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const id = "x3245";
  return (
    <div>
      <h1>Sobre Nosotros</h1>
      <p>
        Si quiere acceder a nuestra página principal vaya al siguiente enlace
      </p>
      <Link to="/">Inicio</Link>
      <br />
      <Link to={`/usuarios/${id}`}>Mi Perfil</Link>
    </div>
  );
};

export default About;
