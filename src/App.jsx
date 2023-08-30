import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import front from "./assets/models/front_.jpg";
import boy_girl from "./assets/models/boy&girl.jpg";
import models3 from "./assets/models/modelos_3.jpg";
import girl from "./assets/models/girl.jpg";
import wideImage from "./assets/models/girls_2.jpg"; // Importa la imagen para dispositivos anchos
import bag from "./assets/models/bag.jpg";
import girls3 from "./assets/models/girls_3.jpg";


function App() {
  const isWideScreen = window.innerWidth > 1024; 

  const images = isWideScreen
    ? [girls3, wideImage, bag, boy_girl] 
    : [models3, front, boy_girl, girl];

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
