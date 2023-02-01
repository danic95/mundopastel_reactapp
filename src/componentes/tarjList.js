import React from 'react';
import Tarj1 from './tarj'; //los componentes deben comenzar en mayúsculas

const tarjList = (props) => (

	(<React.Fragment>
			{
			  props.ejercicio.map((ejercicio) => {
			    return (
			      <Tarj1 
			        key={ejercicio.id}
			        {...ejercicio}
			      />
			      )
			  })
			}
		</React.Fragment>)
		)

export default tarjList