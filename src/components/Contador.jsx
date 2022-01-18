import { useState } from 'react';

const Contador = () => {
	const [contador, setContador] = useState(0);
	const aumentar = () => {
		setContador(contador + 1);
		console.log(contador);
	};
	const disminuir = () => {
		setContador(contador - 1);
		console.log(contador);
	};
	return (
		<>
			<h2>Contador</h2>
			<h3>{contador}</h3>
			<button className="btn btn-success" onClick={aumentar}>
				Aumentar
			</button>
			<button className="btn btn-danger" onClick={disminuir}>
				Disminuir
			</button>
		</>
	);
};

export default Contador;
