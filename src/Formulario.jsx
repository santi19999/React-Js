import { useState } from 'react';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ agregarTodo }) => {
	let initialState = {
		nombre: '',
		description: '',
		estado: 'pendiente',
		prioridad: false,
	};
	const handleChange = (e) => {
		const { name, value, checked, type } = e.target;
		setTodo({
			...todo,
			[name]: type === 'checkbox' ? checked : value,
		});
	};
	const mostrarMensaje = (e, indice, texto, titulo, icono) => {
		e.target[indice].focus();
		Swal.fire({
			title: titulo === 'Éxito' ? titulo : 'Error',
			text: texto,
			icon: icono === 'success' ? icono : 'error',
			confirmButtonText: 'Cerrar',
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!todo.nombre.trim()) {
			mostrarMensaje(e, 0, 'No deje el campo Nombre en blanco', 'Error');
			return;
		}
		if (!todo.description.trim()) {
			mostrarMensaje(e, 1, 'No deje el campo Descripción en blanco', 'Error');
			return;
		}
		agregarTodo({
			nombre: nombre,
			description: description,
			estado: estado === 'pendiente' ? false : true,
			prioridad: prioridad,
			id: uuidv4(),
		});

		mostrarMensaje(e, 0, 'Tarea Agregada', 'Éxito', 'success');
		setTodo(initialState);
	};
	const [todo, setTodo] = useState(initialState);
	const { nombre, description, estado, prioridad } = todo;
	return (
		<>
			<h3 className="text-center my-4">Lista de Tareas Diarias</h3>
			<form onSubmit={handleSubmit} className="container">
				<input
					type="text"
					className="form-control mb-2"
					name="nombre"
					placeholder="Ingrese ToDo Nombre"
					value={nombre}
					onChange={handleChange}
				/>
				<textarea
					className="form-control mb-2"
					name="description"
					placeholder="Ingrese la descripción"
					value={description}
					onChange={handleChange}
				/>
				<select
					name="estado"
					className="form-control mb-2"
					value={estado}
					onChange={handleChange}
				>
					<option value="pendiente">Pendiente</option>
					<option value="completado">Completado</option>
				</select>
				<div className="form-check">
					<input
						className="form-check-input"
						type="checkbox"
						value={prioridad}
						onChange={handleChange}
						id="flexCheckDefault"
						name="prioridad"
					/>
					<label className="form-check-label" htmlFor="flexCheckDefault">
						Prioritario
					</label>
				</div>
				<button className="btn btn-primary" type="submit">
					Agregar
				</button>
			</form>
		</>
	);
};

export default Formulario;
