import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Loading from './Loading';
import Personaje from './Personaje';

const MostrarDatos = ({ nombrePersonaje }) => {
	const [personajes, setPersonajes] = useState([]);
	const [loadig, setLoading] = useState(false);
	useEffect(() => {
		consumirApi(nombrePersonaje);
	}, [nombrePersonaje]);
	const consumirApi = async (nombre) => {
		setLoading(true);
		try {
			const res = await fetch(
				`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`
			);
			if (!res.ok) {
				return Swal.fire({
					title: 'Error!',
					text: 'Personaje no Encontrado',
					icon: 'error',
				});
			}
			const datos = await res.json();
			setPersonajes(datos.results);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};
	if (loadig) {
		return <Loading />;
	}

	return (
		<div className="container my-5">
			<div className="row">
				{personajes.map((item) => (
					<Personaje key={item.id} personaje={item} />
				))}
			</div>
		</div>
	);
};

export default MostrarDatos;
