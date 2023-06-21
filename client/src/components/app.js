import React from 'react'
import '../assets/css/App.css';
import BarraLateral from './BarraLateral';
import Contenido from './Contenido'

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <BarraLateral />
        <Contenido />
      </div>
    </React.Fragment>
  );
}

export default App;
