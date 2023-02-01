import React from 'react';
import TarjList from '../componentes/tarjList'; //los componentes deben comenzar en mayúsculas
import Bienve from '../componentes/bienvenida';
import AddButtom from '../componentes/AddButton'
import Loading from '../componentes/Loading'
import ErrorFatal from './500'
import useTraer from '../hooks/useTraer'

const Pagina1 = () => {

    const {
      datos, loading, error
    } = useTraer('exercises');

    if(loading){
      return <Loading />
    }else if(error){
      return <ErrorFatal />
    }
    
    return (<React.Fragment>
              <Bienve 
                username="Cosho bebé"
                description="la amo mucho"
              />
              <TarjList 
                ejercicio={datos}
              />
              <AddButtom />
        </React.Fragment>);
}

/*class pagina1 extends React.Component{

	constructor(props){
    super(props);
    this.state = {
      datos: [],
      loading : true,
      error: null
    }
  }

  async componentDidMount(){
    await this.traerEjercicios();
  }

  traerEjercicios = async () => {
    try{

      let res = await fetch('http://localhost:8000/api/exercises');
      let datos = await res.json() //debe tener el mismo nombre que el objeto del estado

      this.setState({datos, loading: false});

    }catch(error){
      this.setState({loading: false, error});
    }
    
  }

  render(){

    if(this.state.loading){
      return <Loading />
    }else if(this.state.error){
      return <ErrorFatal />
    }
    
		return (<React.Fragment>
              <Bienve 
                username="Cosho bebé"
                description="la amo mucho"
              />
              <TarjList 
                ejercicio={this.state.datos}
              />
              <AddButtom />
        </React.Fragment>);
	}
}*/

export default Pagina1