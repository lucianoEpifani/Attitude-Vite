import React from "react";
import shirt1 from "../../assets/products/p1.jpg";
import shirt2 from "../../assets/products/p2.jpg";
import shirt3 from "../../assets/products/p3.jpg";
import shirt4 from "../../assets/products/p4.jpg";
import {BsBag} from 'react-icons/bs'; 
import "./Products.css";
import { Fragment, useState } from 'react';

const products = [
  { image: shirt1, title:"Vestido",price: "39.99 EUR"  },
  { image: shirt2, title:"Vestido",price: "39.99 EUR"  },
  { image: shirt3, title:"Vestido",price: "39.99 EUR"  },
  { image: shirt4, title:"Vestido",price: "39.99 EUR"  },
  { image: shirt2, title:"Vestido",price: "39.99 EUR"  },
  { image: shirt4, title:"Vestido",price: "39.99 EUR"  },
  { image: shirt1, title:"Vestido",price: "39.99 EUR"  },
  { image: shirt2, title:"Vestido",price: "39.99 EUR"  },
  { image: shirt3, title:"Vestido",price: "39.99 EUR"  },
  { image: shirt4, title:"Vestido",price: "39.99 EUR"  },
  { image: shirt2, title:"Vestido",price: "39.99 EUR"  },
  { image: shirt4, title:"Vestido",price: "39.99 EUR"  },
];

function Products() {

  const [active, setActive] = useState(false);
  
  return (
    <div className="container-products">
       <>
       
        <div onClick={() =>{setActive(true)}} id="burger" className="menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                </svg>
                <h1>AttitudE</h1>
                <BsBag/>
        </div>
        {active ? <nav id="nav" className="navegacion">
        <div className="nav-titulo">
            <svg  onClick={() =>{setActive(false)}} id="close" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="36" height="36" viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
              <h2>AttitudE</h2>
        </div>
        <ul className="genero">
            <li><a href="">Woman</a></li>
            <li><a href="">Man</a></li>
            <li><a href="">Kids</a></li>
        </ul>
        <ul className="categorias">
            <li><a href="">T-Shirts</a></li>
            <li><a href="">Jeans</a></li>
            <li><a href="">Shoes</a></li>
            <li><a href="">Winter Hat</a></li>
        </ul>
        <ul className="categorias">
            <li><a href="">Tops | Bodies</a></li>
            <li><a href="">Perfume</a></li>
            <li><a href="">Lenceria | Pijama</a></li>
            <li><a href="">Chalecos</a></li>
        </ul>
        <ul className="categorias">
            <li><a href="">Accesorios | Bisuteria</a></li>
            <li><a href="">Cazadoras</a></li>
            <li><a href="">Blazers</a></li>
            <li><a href="">Vestidos</a></li>
        </ul>
        <ul className="categorias">
            <li><a href="">T-Shirts</a></li>
            <li><a href="">Jeans</a></li>
            <li><a href="">Shoes</a></li>
            <li><a href="">Winter Hat</a></li>
        </ul>
    </nav> : <> </>}
        
    </>
      <div className="buscador-product">
        <input type="text" placeholder="Busca un articulo" />
      </div>
      <div className="grid-products">
        {products.map((product, index) => (
          <div className="product">
            <img src={product.image} />
            <div className="description-product">
              <a href="product.jsx">
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              </a>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Products;
