import { useState } from 'react';

const Formulario = () => {
	const [todo, setTodo] = useState({
		toDoName: '',
		toDoDescripcion: '',
		toDoEstado: 'pendiente',
		toDoCheck: false,
	});
	const [error, setError] = useState(false);
	console.log('todo: ', todo);
	console.log('setTodo: ', setTodo);

	const handleSubmit = (e) => {
		e.preventDefault();
		const { toDoName, toDoDescripcion } = todo;
		if (!toDoDescripcion.trim() || !toDoName.trim()) {
			setError(true);
			return;
		}
		setError(false);
	};
	const handleChange = (e) => {
		const { name, value, checked, type } = e.target;
		setTodo({
			...todo,
			[name]: type === 'checkbox' ? checked : value,
		});
	};
	const MostrarError = () => (
		<div className="alert alert-danger">Campos Obligatorios</div>
	);

	return (
		<>
			{error ? <MostrarError /> : null}

			<form className="container" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Ingrese ToDo"
					name="toDoName"
					className="form-control mb-2"
					value={todo.toDoName}
					onChange={handleChange}
				/>
				<textarea
					name="toDoDescripcion"
					placeholder="Ingrese la Descripción del ToDo"
					className="form-control mb-2"
					value={todo.toDoDescripcion}
					onChange={handleChange}
				/>
				<select
					name="toDoEstado"
					className="form-control mb-2"
					value={todo.toDoEstado}
					onChange={handleChange}
				>
					<option value="pendiente">Pendiente</option>
					<option value="completada">Completada</option>
				</select>
				<div className="form-check">
					<input
						className="form-check-input"
						type="checkbox"
						name="toDoCheck"
						value="todo.toDoCheck"
						onChange={handleChange}
					/>
					<label className="form-check-label" htmlFor="flexCheckDefault">
						Dar Prioridad
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
