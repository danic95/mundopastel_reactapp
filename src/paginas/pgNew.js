import React from 'react';
import ExerciseForm from '../componentes/exerciseForm';
import Tarj from '../componentes/tarj';

const pgNew = ({form, onChange, onSubmit}) => 
(<div className="row">

					<div className="col-sm">
						<Tarj
						{...form}
				      	/>
		      </div>

					<div className="col-sm">
						<ExerciseForm 
						onChange = {onChange}
						onSubmit = {onSubmit}
						form = {form}
						/>
		      </div>

  </div>
	)

export default pgNew