import logo from './logo.svg';
import './App.css';

function App() {
  let nombre = "Gian";
  let numeros = [1,2,3];
  let auth = true;
  return (
    /* TODO ESTO ES JSX no HTML */
    <>
      <div className="App">
      <header className="App-header">
      <h3>Hola {nombre}</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Gian <code>Code</code>
        </p>
        <a className="App-link" href="https://giancode.com" target="_blank"
          rel="noopener noreferrer">Perfil
        </a>
        suma {2+2}
        <p>El usuario {auth?"esta logeado":"no esta logeado"}</p>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre"></input>
        <ul>
          {numeros.map((x,index)=>(
            <li key={index}>{x}</li>
          ))}
        </ul>
      </header>
    </div>
    </>
  );
}

export default App;
