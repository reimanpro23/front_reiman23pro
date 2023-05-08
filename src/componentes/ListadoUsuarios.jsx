import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ListadoUsuarios = ({usuario}) => {
	//const listaUsuarios = usuario.usuario;
	return (
		<div className='listado'>
			<h1 className='titulo'>Lista de Usuarios</h1>
			<ul>
				{usuario.map((elemento) => {
					// === Primera opción ===
					return (
						<div className='card-dos all-center'>
							<h2>{elemento.nombreUsuario}</h2>
							<h4>{elemento.cif}</h4>
							<h4>{elemento.email}</h4>
							<h4>{elemento.password}</h4>
							<h4>{elemento.direccion}</h4>
						</div>
					);
					// === Otra opción ===
					// return <ElementoLista key={elemento.id} element={elemento.nombre} />;
				})}
			</ul>
		</div>
	);
};

export default ListadoUsuarios;