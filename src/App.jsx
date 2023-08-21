import './App.css';
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import Product from './components/Product/Product';
import attitude from './assets/models/guy.png';

function App() {
  return (
    <div className="contenedor">
       <div className="slider-container">
            <div className="slider">
                <img src={attitude} alt="Slider Image"/>
            </div>
        </div>
    <header>
     <Nav/>
    </header>
    
      <Search/>
  </div>
  )
}

export default App
