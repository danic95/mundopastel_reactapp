import React from 'react';
import './estilos/tarj.css';
import Circles from '../imagenes/circles.png';

const tarj = ({title,
description,
img,
leftColor,
rightColor}) => (
			<div className="tarj mx-auto Fitness-tarj" style={{
				backgroundImage: `url(${Circles}), linear-gradient(to right, ${leftColor}, ${rightColor})`
			}}>
				<div className="card-body">
					<div className="row center">
						<div className="col-6">
							<img className="float-right" src={img} />
						</div>
						<div className="col-6 Fitness-tarj-Info">
							<h1>{title}</h1>
							<p>{description}</p>
						</div>
					</div>
				</div>
			</div>
)

export default tarj