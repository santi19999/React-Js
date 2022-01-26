import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import { Link } from 'react-router-dom';

const Inicio = () => {
	const { user, signIn, signOut } = useContext(UserContext);
	return (
		<div>
			<h1>Inicio</h1>
			<h2>{user ? 'Conectado' : 'Desconectado'}</h2>
			{user ? (
				<>
					<button className="btn btn-primary" onClick={signOut}>
						Desconectar
					</button>
					<Link to="/protegida">Ruta Protegida</Link>
				</>
			) : (
				<button className="btn btn-primary" onClick={signIn}>
					Acceder
				</button>
			)}
		</div>
	);
};

export default Inicio;
