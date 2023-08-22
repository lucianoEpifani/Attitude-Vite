import React from "react";
import shirt1 from "../../assets/products/p1.jpg";
import shirt2 from "../../assets/products/p2.jpg";
import shirt3 from "../../assets/products/p3.jpg";
import shirt4 from "../../assets/products/p4.jpg";
import {BsBag} from 'react-icons/bs'; 
import "./Products.css";
import Nav from '../Nav/Nav'
import { Fragment, useState } from 'react';
import { Link } from "react-router-dom";

const products = [
  { id: 1, image: shirt1, title:"Vestido",price: "39.99 EUR"  },
  { id: 2, image: shirt2, title:"Vestido",price: "39.99 EUR"  },
  { id: 3, image: shirt3, title:"Vestido",price: "39.99 EUR"  },
  { id: 4, image: shirt4, title:"Vestido",price: "39.99 EUR"  },
  { id: 5, image: shirt1, title:"Vestido",price: "39.99 EUR"  },
  { id: 6, image: shirt2, title:"Vestido",price: "39.99 EUR"  },
  { id: 7, image: shirt3, title:"Vestido",price: "39.99 EUR"  },
  { id: 8, image: shirt4, title:"Vestido",price: "39.99 EUR"  },
  { id: 9, image: shirt2, title:"Vestido",price: "39.99 EUR"  },
  { id: 10, image: shirt3, title:"Vestido",price: "39.99 EUR"  },
  { id: 11, image: shirt4, title:"Vestido",price: "39.99 EUR"  },
  { id: 12, image: shirt1, title:"Vestido",price: "39.99 EUR"  },
];

function Products() {
  
  return (
    <div className="container-products">
      <Nav/>
      
      <div className="buscador-product">
        <input type="text" placeholder="Busca un articulo" />
      </div>
      <div className="grid-products">
        {products.map((product, index) => (
          <div className="product">
            <img src={product.image} />
            <div className="description-product">
             <Link to={`/products/${product.id}`}>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
             </Link>
             
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Products;
