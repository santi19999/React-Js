import Contador from './components/Contador';
import Frutas from './components/Frutas';

const App = () => {
	const nombre = 'noelia gauna';
	const saludo = 'Hola , buenas noches';
	const clasesObjeto = {
		primary: 'text-primary',
		secondary: 'text-secondary',
		danger: 'text-danger',
	};
	const SaludoBienvenida = () => {
		//componente
		return <h2 className={clasesObjeto.danger}>¡Bienvenida!</h2>;
	};
	const SaludoDespedida = () => {
		//componente
		//componente
		return <h2 className={clasesObjeto.secondary}>¡Adioss!</h2>;
	};
	const funcionClick = (nombre) => {
		return console.log(`Button dice: Me diste click '` + nombre + `'`);
	};
	const user = true;
	const frutas = ['🍌', '🍍', '🥭', '🍎', '🍊', '🍉', '🍔'];

	return (
		<div className="container ">
			<Contador />
			<p className={clasesObjeto.primary}>
				{saludo} {nombre}
			</p>
			{user ? <SaludoBienvenida /> : <SaludoDespedida />}
			<Frutas arrayFrutas={frutas} />
			<button className="btn btn-primary" onClick={() => funcionClick('Santi')}>
				Dame Click
			</button>
		</div>
	);
};

export default App;
