import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const id = "6447ab46d86e4cb036503f83";
  return (
    <div>
      <h1>Sobre Nosotros</h1>
      <p>
        Si quiere acceder a nuestra página principal vaya al siguiente enlace
      </p>
      <br/>
      <Link to="/">Inicio</Link>
      <br />
      <Link to={`/usuarios/${id}`}>Mi Perfil</Link>
    </div>
  );
};

export default About;
