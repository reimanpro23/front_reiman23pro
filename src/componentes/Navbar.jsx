import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          {/* // isActive */}
          <NavLink
            className={({ isActive }) => (isActive ? "activo" : "noactivo")}
            to="/"
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activo" : "noactivo")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activo" : "noactivo")}
            to="/productos"
          >
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activo" : "noactivo")}
            to="/contactos"
          >
            Contactos
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activo" : "noactivo")}
            to="/login"
          >
            Registrarse
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activo" : "noactivo")}
            to="/login"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activo" : "noactivo")}
            to="/logout"
          >
            Logout
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activo" : "noactivo")}
            to="/buscar"
          >
            Buscar Productos
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activo" : "noactivo")}
            to="/buscar"
          >
            Buscar Usuarios
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
