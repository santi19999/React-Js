import { useEffect, useState } from 'react';
import Formulario from '../Formulario';
import ToDo from './ToDo';

const TodoList = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		//cada vez que se reenderiza el sitio web lee del local storage lo que hay
		if (localStorage.getItem('todos')) {
			setTodos(JSON.parse(localStorage.getItem('todos')));
		}
	}, []);

	useEffect(() => {
		// cada vez que se edita o elimina un todo lo detecta y lo modifica en el local storage
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const agregarTodo = (todo) => {
		console.log(todo);
		setTodos((old) => [...old, todo]);
	};
	const eliminarTodo = (id) => {
		setTodos((old) => old.filter((item) => item.id !== id));
	};
	const editarEstado = (id) => {
		let editarTodos = todos.map((item) =>
			item.id === id ? { ...item, estado: !item.estado } : item
		);
		setTodos(editarTodos);
	};
	return (
		<>
			<Formulario agregarTodo={agregarTodo} />
			<ul className="list-group list-group-numbered my-3">
				{todos.map((item) => (
					<ToDo
						key={item.id}
						todo={item}
						eliminarTodo={eliminarTodo}
						editarEstado={editarEstado}
					/>
				))}
			</ul>
			{console.log(todos)}
		</>
	);
};

export default TodoList;
