import logo from './MundoPastel_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mundo Pastel Honduras.
        </p>
        <a
          className="App-link"
          href="https://mundopastelhn.negocio.site"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir a Mundo Pastel
        </a>
      </header>
    </div>
  );
}

export default App;
