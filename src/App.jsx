import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import front from "./assets/models/front_.jpg";
import boy_girl from "./assets/models/boy&girl.jpg";
import models3 from "./assets/models/modelos_3.jpg";
import pants from "./assets/models/pants.jpg";

function App() {
  const images = [models3, front, boy_girl, pants];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="contenedor">
      <header>
        <Nav />
      </header>
      <Search />
      <div className="slider-container">
        <div className="slider">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slider-img ${index === currentImageIndex ? 'visible' : 'hidden'}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
