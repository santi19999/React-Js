import { useState } from 'react';
import Formulario from './components/Formulario';
import MostrarDatos from './components/MostrarDatos';

const App = () => {
	const [nombrePersonaje, setNombrePersonaje] = useState('');
	return (
		<div className="my-4 text-center">
			<h1>App Rick and Morty</h1>
			<Formulario setNombrePersonaje={setNombrePersonaje} />
			<MostrarDatos nombrePersonaje={nombrePersonaje} />
		</div>
	);
};

export default App;
