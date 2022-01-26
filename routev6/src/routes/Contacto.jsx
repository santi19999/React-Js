import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

const Contacto = () => {
	const { signOut } = useContext(UserContext);

	return (
		<div>
			<button className="btn btn-danger" onClick={signOut}>
				Sign Out
			</button>
			<h1>Contacto</h1>
			<p>Lorem ipsum dolor sit.</p>
		</div>
	);
};

export default Contacto;
