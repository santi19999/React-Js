import { useRef } from 'react';

const FormNoControlado = () => {
	const formulario = useRef(null);
	const handleSubmit = (e) => {
		e.preventDefault();

		const datos = new FormData(formulario.current);
		const objetoDatos = Object.fromEntries([...datos.entries()]);
		console.log(objetoDatos);
		const { toDoDescripcion, toDoEstado, toDoName } = objetoDatos;
		if (!toDoDescripcion.trim() || !toDoName.trim()) {
			console.log('esta vacíio el campo');
			return;
		}
		console.log('Pasó las validaciones');
	};
	return (
		<>
			<form ref={formulario} className="container" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Ingrese ToDo"
					name="toDoName"
					className="form-control mb-2"
					defaultValue="Tarea #01"
				/>
				<textarea
					name="toDoDescripcion"
					placeholder="Ingrese la Descripción del ToDo"
					className="form-control mb-2"
					defaultValue="Tarea #01"
				/>
				<select name="toDoEstado" className="form-control mb-2">
					<option value="pendiente">Pendiente</option>
					<option value="completada">Completada</option>
				</select>
				<button className="btn btn-primary">Agregar</button>
			</form>
		</>
	);
};

export default FormNoControlado;
