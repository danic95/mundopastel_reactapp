import React from 'react';
//import Tarj1 from 'tarj'; //los componentes deben comenzar en mayúsculas
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pagina1 from '../paginas/pagina1'; //los componentes deben comenzar en mayúsculas
import Pagina2 from '../paginas/pagina2'; //los componentes deben comenzar en mayúsculas
import NotFound from '../paginas/NotFound'; //los componentes deben comenzar en mayúsculas

function App(props){

	return(<div>
				<BrowserRouter>
					<Switch>
						<Route exact path="/exercise" component={Pagina1} />
					<Route exact path="/exercise/new" component={Pagina2} />
					<Route component={NotFound} />
					</Switch>
				</BrowserRouter>
		</div>)
}

export default App