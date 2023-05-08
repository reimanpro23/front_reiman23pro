import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ListadoProductos = ({producto}) => {
	//const listaUsuarios = usuario.usuario;
	return (
		<div className='listado'>
			<h1 className='titulo'>Lista de Productos</h1>
			<ul>
				{producto.map((elemento) => {
					// === Primera opción ===
					return (
						<div className='card-dos all-center'>
							<h2>{elemento.nombreProducto}</h2>
							<h4>{elemento.descripcion}</h4>
							<h4>{elemento.imagen}</h4>
							<h4>{elemento.precio}</h4>
							
						</div>
					);
					// === Otra opción ===
					// return <ElementoLista key={elemento.id} element={elemento.nombre} />;
				})}
			</ul>
		</div>
	);
};

export default ListadoProductos;