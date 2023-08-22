import React from "react";
import shirt1 from "../../assets/products/p1.jpg";
import shirt2 from "../../assets/products/p2.jpg";
import shirt3 from "../../assets/products/p3.jpg";
import shirt4 from "../../assets/products/p4.jpg";
import "./Products.css";
import Nav from '../Nav/Nav'
import { Link } from "react-router-dom";
import { useState } from "react";


const products = [
  { id: 1, image: shirt1, title:"Camisa",price: "49.99 EUR"  },
  { id: 2, image: shirt2, title:"Camisa",price: "29.99 EUR"  },
  { id: 3, image: shirt3, title:"Camisa",price: "49.99 EUR"  },
  { id: 4, image: shirt4, title:"Camisa",price: "19.99 EUR"  },
  { id: 5, image: shirt1, title:"Camisa",price: "29.99 EUR"  },
  { id: 6, image: shirt2, title:"Camisa",price: "39.99 EUR"  },
  { id: 7, image: shirt3, title:"Camisa",price: "45.99 EUR"  },
  { id: 8, image: shirt4, title:"Camisa",price: "22.99 EUR"  },
  { id: 9, image: shirt2, title:"Camisa",price: "25.99 EUR"  },
  { id: 10, image: shirt3, title:"Camisa",price: "50.99 EUR"  },
  { id: 11, image: shirt4, title:"Camisa",price: "19.99 EUR"  },
  { id: 12, image: shirt1, title:"Camisa",price: "19.99 EUR"  },
];

function Products() {

  const [visible, setVisible] = useState("container-products-active")

  console.log(visible)
  
  return (
    <>
    <Nav setVisible={setVisible}/>
    <div className={`container-products ${visible}`}>
      <div className="buscador-product">
        <input type="text" placeholder="Busca un articulo" />
      </div>
      <div className="grid-products">
        {products.map((product, index) => (
          <div className="product">
            <div className="description-product">
             <Link to={`/products/${product.id}`}>
             <img src={product.image} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
             </Link>
            </div>
          </div>
        ))}
        
      </div>
    </div>
    </>
  );
}

export default Products;
