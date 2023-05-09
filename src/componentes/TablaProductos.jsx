import { useState } from "react";
import "./Tabla.css";

const TablaProductos = ({ datos }) => {
  const [seleccionResultado, setSeleccionResultado] = useState(null);

  const gestorSeleccion = (dato) => {
    setSeleccionResultado(dato);
    console.log(dato);
  };

  return (
    <table className="tabla">
      <tbody>
        <tr>
          <th>nombreProducto</th>
          <th>Descripción</th>
          <th>Imagen</th>
          <th>Precio</th>
          <th>nombreUsuario</th>
        </tr>
        {datos.map((dato) => (
          <tr key={dato._id} onClick={() => gestorSeleccion(dato)}>
            <td>{dato.nombreproducto}</td>
            {/* {dato.usuario !== null ? (
              <td>{dato.usuario.nombreUsuario}</td>
            ) : (
              <td>No Asignado</td>
            )} */}
            <td>{dato.descripcion}</td>
            <td>{dato.imagen}</td>
            <td>{dato.precio}</td>
            <td>{dato.nombreUsuario}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaProductos;
