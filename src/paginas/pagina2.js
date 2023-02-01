import React, {useState} from 'react';
import Loading from '../componentes/Loading'
import ErrorFatal from './500'
import PgNew from './pgNew'
import url from '../config'

const Pagina2 = ({history}) => {

	const [form, setForm] = useState({title: '',
				description: '',
				img: '',
				leftColor: '',
				rightColor: ''
			});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const onSubmit = async (e) => {
					
						setLoading(true);

						e.preventDefault();
						try{
							let config = {
								method: 'POST',
								headers: {
									'Accept': 'application.json',
									'Content-Type': 'application.json'
								},
								body: JSON.stringify(form)
							};

							let res = await fetch(`${url}/exercises`, config);
							let jason = await res.json();

						setLoading(false);

						history.push('/exercise');
						}catch(error){
							
							setLoading(false)
							setError(error);
							console.log(error);
						}
					};

	const onChange = (e) => {
						/*let partialState = {};
						partialState[e.target.name] = e.target.value;
						this.setState(partialState);*/

						setForm({
									...form,
									[e.target.name]: e.target.value
								});
						};

	if(loading){
      return <Loading />
    }else if(error){
      return <ErrorFatal />
    };
	
	return (<PgNew 
		form = {form}
		onChange = {onChange}
		onSubmit = {onSubmit}
			/>
            );
}

/*class Pagina2 extends React.Component{

	state = {
		form:{title: '',
				description: '',
				img: '',
				leftColor: '',
				rightColor: ''
			},
			loading: false,
			error: null
	}

	handleChange = (e) => {*/
		/*let partialState = {};
		partialState[e.target.name] = e.target.value;
		this.setState(partialState);*/

		/*this.setState(
				{
					form: {
					...this.state.form,
					[e.target.name]: e.target.value
				}
			});
		}

	//e es el objeto del evento
	handleSubmit = async (e) => {
		
		this.setState(
				{loading: true});

		e.preventDefault();
		try{
			let config = {
				method: 'POST',
				headers: {
					'Accept': 'application.json',
					'Content-Type': 'application.json'
				},
				body: JSON.stringify(this.state.form)
			};

			let res = await fetch('http://localhost:8000/api/exercises', config);
			let jason = await res.json();

		this.setState(
				{loading: false});

		this.props.history.push('/exercise');
		}catch(error){
			
			this.setState(
					{loading: false,
										error});
			console.log(error);
		}
	}

  render(){

    if(this.state.loading){
      return <Loading />
    }else if(this.state.error){
      return <ErrorFatal />
    }
		return (<PgNew 
			form = {this.state.form}
			onChange = {this.handleChange}
			onSubmit = {this.handleSubmit}
			/>
                );
	}
}*/

export default Pagina2

