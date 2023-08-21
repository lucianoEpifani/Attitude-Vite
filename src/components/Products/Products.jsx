import React from "react";
import shirt1 from "../../assets/products/p1.jpg";
import shirt2 from "../../assets/products/p2.jpg";
import shirt3 from "../../assets/products/p3.jpg";
import shirt4 from "../../assets/products/p4.jpg";
import { BsBag } from "react-icons/bs";
import "./Products.css";

const products = [
  { image: shirt1, title:"Vestido",price: "39.99 EUR"  },
  { image: shirt2, title:"Vestido",price: "39.99 EUR"  },
  { image: shirt3, title:"Vestido",price: "39.99 EUR"  },
  { image: shirt4, title:"Vestido",price: "39.99 EUR"  },
  { image: shirt2, title:"Vestido",price: "39.99 EUR"  },
  { image: shirt4, title:"Vestido",price: "39.99 EUR"  },
];

function Products() {
  return (
    <div className="container-products">
      <div
        onClick={() => {
          setActive(true);
        }}
        id="burger"
        className="menu-icon"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu-2"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
        <h1>AttitudE</h1>
        <BsBag />
      </div>
      <div className="buscador-product">
        <input type="text" placeholder="Busca un articulo" />
      </div>
      <div className="grid-products">
        {products.map((product, index) => (
          <div className="product">
            <img src={product.image} />
            <div className="description-product">
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Products;
