const Personaje = ({ personaje }) => {
	const { name, species, image } = personaje;

	return (
		<>
			<article className="col-md-3  mb-3">
				<div className="card text-center shadow">
					<img src={image} alt={`imagen-${name}`} />
					<div class="card-body">
						<h5 className="card-title text-primary ">{name}</h5>
						<p className="lead text-secondary">{species}</p>
					</div>
				</div>
			</article>
		</>
	);
};

export default Personaje;
