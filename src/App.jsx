import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import SobreNosotros from './componentes/SobreNosotros';
import Contacto from './componentes/Contacto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
        </div>
        <h1 className='titulo'>Óptica Mega Visión</h1>
        <h2 className='eslogan'>Ve lo mejor de la vida</h2>
        <nav className='menu'>
          <>
          <NavLink className='enlace' to="/">Inicio</NavLink>
          <NavLink className='enlace' to="/SobreNosotros">Sobre Nosotros</NavLink>
          <NavLink className='enlace' to="/Contacto">Contacto</NavLink>
          </>
        </nav>
      </header>
      <body className='App-body'>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/SobreNosotros' element={<SobreNosotros/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
        </Routes>
      </body>
      <footer className='App-footer'>
      </footer>
    </div>
  );
}

export default App;
