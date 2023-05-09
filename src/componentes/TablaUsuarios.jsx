import { useState } from "react";
import "./Tabla.css";

const TablaUsuarios = ({ datos }) => {
  const [seleccionResultado, setSeleccionResultado] = useState(null);

  const gestorSeleccion = (dato) => {
    setSeleccionResultado(dato);
    console.log(dato);
  };

  return (
    <table className="caja2">
      <tbody>
        <tr>
          <th>nombreUsuario</th>
          <th>cif</th>
          <th>email</th>
          <th>password</th>
          <th>direccion</th>
          <th>productos</th>
        </tr>
        {datos.map((dato) => (
          <tr key={dato._id} onClick={() => gestorSeleccion(dato)}>
            <td>{dato.nombreUsuario}</td>
            {/* {dato.usuario !== null ? (
              <td>{dato.usuario.nombreUsuario}</td>
            ) : (
              <td>No Asignado</td>
            )} */}
            <td>{dato.cif}</td>
            <td>{dato.email}</td>
            <td>{dato.password}</td>
            <td>{dato.direccion}</td>
            <td>{dato.productos}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaUsuarios;
