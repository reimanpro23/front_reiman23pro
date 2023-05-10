import './App.css';
import BorrarProductos from './pages/BorrarProductos';
import BorrarUsuarios from './pages/BorrarUsuarios';
import AltaUsuario from './componentes/AltaUsuario';
import AltaProducto from './componentes/AltaProducto';
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";
import Inicio from "./pages/Inicio";
import About from "./pages/About";
import BuscarUsuarios from "./pages/BuscarUsuarios";
import BuscarProductos from "./pages/BuscarProductos";
import Notfound from "./pages/Notfound";
import Contactos from "./pages/Contactos";
// import Navbar from "./componentes/Navbar";
// import Usuarios from "./componentes/Usuarios";
// import Productos from "./componentes/Productos";
import Login from './componentes/Login';
import Logout from './componentes/Logout';


function App() {
  
  // const [usuarios, setUsuarios] = useState(Usuarios);
  // console.log(usuarios);
  // const creaNuevoUsuario = (usuario) => {
  //   setUsuarios([...usuarios, usuario]);
  // };
  
  // const [productos, setProductos] = useState(Productos);
  // console.log(productos);
  // const creaNuevoProducto = (producto) => {
  //   setProductos([...productos, producto]);
  // };

  const [tieneAcceso, setTieneAcceso] = useState(false);
  const [datos, setDatos] = useState({});
  const [datosLogout, setDatosLogout] = useState({});
  const [token, setToken] = useState();

  // Traemos desde el componente Auth los datos del usuario enviados desde el servidor mediane esta función prop
  const gestionarLogin = (dato) => {
    setDatos(dato); // datos del usuario: email, password y token
    setTieneAcceso(true);
    // La variable que indica que está logueado se pone a true
    setToken(dato.token);
    console.log(tieneAcceso);
  };

  const gestionarLogout = () => {
    setTieneAcceso(false);
  };
  
  return (
  <div className="contenedor-principal">
		{/* <div className='alta'>
		<AltaUsuario onNuevoUsuario={creaNuevoUsuario} />
		</div> */}

  {/* <div className="App"> */}
		{/* <div className='alta'>
		<AltaProducto onNuevoProducto={creaNuevoProducto} />
		</div> */}

		{/* <div className='listado'>
		<ListadoProductos producto={Productos}/> 
		</div> */}

		<div>
	   <Router>
        
        <div className="navbar">
          {tieneAcceso === false ? (
            <div>
              <NavLink className={"navlink"} to="/">
                Inicio
              </NavLink>
              <NavLink className={"navlink"} to="/About">
                About
              </NavLink>
              <NavLink className={"navlink"} to="/Contactos">
                Contactos
              </NavLink>
              <NavLink className={"navlink"} to="/Login">
                Login
              </NavLink>
              <NavLink className={"navlink"} to="/AltaUsuario">
                Crear Cuenta
              </NavLink>
            </div>
          ) : (
            <div>
              <NavLink className={"navlink"} to="/">
                Inicio
              </NavLink>
              <NavLink className={"navlink"} to="/AltaProducto">
                Crear Producto
              </NavLink>
              <NavLink className={"navlink"} to="/BuscaUsuarios">
                Usuarios
              </NavLink>
              <NavLink className={"navlink"} to="/BuscaProductos">
                Productos
              </NavLink>
              <NavLink className={"navlink"} to="/Logout">
                Logout
              </NavLink>
            </div>
          )}
        </div>
      
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="/usuarios" element={<AltaUsuario />} /> */}
          <Route path="/AltaProducto" element={<AltaProducto />} />
          <Route path="/BuscarUsuarios" element={<BuscarUsuarios />} />
          <Route path="/BuscarProductos" element={<BuscarProductos />} />

          {/* <Route path="/usuario" element={<Navigate to="/usuarios" />} />
          <Route path="/producto" element={<Navigate to="/productos" />} /> */}
          <Route
            path="/Login"
            element={<Login gestionarLogin={gestionarLogin} />}
          />

          <Route
            path="/Logout"
            element={<Logout gestionarLogout={gestionarLogout} />}
          />
          <Route path="/AltaUsuario" element={<AltaUsuario />} />
          <Route path="/404" element={<Notfound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />



          {/* <Route path="/login" element={<Login to="/login"/>} />
          <Route path="/logout" element={<Logout to="/logout"/>} /> */}
          {/* <Route path="/contactos" element={<Contactos />} />
          <Route path="/buscar" element={<BuscarProductos />} />
          <Route path="/buscar" element={<BuscarUsuarios />} />
          <Route path="/borrar" element={<BorrarProductos />} />
          <Route path="/borrar" element={<BorrarUsuarios />} />
          <Route path="*" element={<Desconocido />} /> */}
        </Routes>
      
      </Router>
	   </div>
	 
  </div>  );
}




export default App;
