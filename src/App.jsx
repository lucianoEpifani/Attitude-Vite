import './App.css';
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import attitude from './assets/models/models_3.png';
import attitude_2 from './assets/models/guy.png';


function App() {
  return (
    <div className="contenedor">
       <div className="slider-container">
            <div className="slider">
            <img src={attitude_2} alt="Slider Image" className='guy'/>
              <img src={attitude} alt="Slider Image" className='girls'/>
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
