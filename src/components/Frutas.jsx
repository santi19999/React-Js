import React from 'react';

const Frutas = (props) => {
	return (
		<React.Fragment>
			<ul>
				{props.arrayFrutas.map((fruta, index) => (
					<li key={index}>{fruta}</li>
				))}
			</ul>
			<p>Lorem ipsum dolor sit.</p>
		</React.Fragment>
		// OPCION (CORTA) PARA RETORNAR MAS DE UN ELEMENTO
		// <>
		// 	<ul>
		// 		{frutas.map((fruta, index) => (
		// 			<li key={index}>{fruta}</li>
		// 		))}
		// 	</ul>
		// 	<p>Lorem ipsum dolor sit.</p>
		// </>
	);
};

export default Frutas;
