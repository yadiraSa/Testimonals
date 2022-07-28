// import Testimonio from './componentes/Testimonio';
import InfoPersonas from './componentes/infoPersonas';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre el freeCodeCamp</h1>
          <InfoPersonas />        
      </div>
    </div>
  );
}

export default App;
