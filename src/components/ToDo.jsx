const ToDo = ({ todo, eliminarTodo, editarEstado }) => {
	const { id, nombre, description, estado, prioridad } = todo;
	return (
		<>
			<li className="list-group-item d-flex justify-content-between align-items-start">
				<div className="ms-2 me-auto">
					<div className="fw-bold">
						{nombre} ({estado ? 'Finalizado' : 'Pendiente'})
					</div>
					<p>{description}</p>
					<div>
						<button
							className="btn btn-danger me-2"
							onClick={() => eliminarTodo(id)}
						>
							Eliminar
						</button>
						<button
							className="btn btn-warning"
							onClick={() => editarEstado(id)}
						>
							Editar
						</button>
					</div>
				</div>
				<span className="badge bg-primary rounded-pill">
					{prioridad && 'Prioritario'}
				</span>
			</li>
		</>
	);
};

export default ToDo;
