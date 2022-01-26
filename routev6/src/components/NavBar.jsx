import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext as juanito } from '../context/UserProvider';

const NavBar = () => {
	const { user } = useContext(juanito);
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link to="/">{user ? 'Juanito' : 'Sin Conexión'}</Link>
				<NavLink to="/" className="btn btn-outline-primary">
					Inicio
				</NavLink>
				<NavLink to="/Blog" className="btn btn-outline-primary">
					Blog
				</NavLink>
				<NavLink to="/Contacto" className="btn btn-outline-primary">
					Contacto
				</NavLink>
			</div>
		</nav>
	);
};

export default NavBar;
