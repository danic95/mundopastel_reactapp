import React from 'react';
import './estilos/bienvenida.css';

function bienvenida(props){

	return(
			<div className="container">
				<div className="Fitness-User-Info">
						<h1>Bienvenido, {props.username}</h1>
						<p>{props.description}</p>
				</div>
			</div>
		)
}

export default bienvenida