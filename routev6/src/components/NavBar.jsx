import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
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
