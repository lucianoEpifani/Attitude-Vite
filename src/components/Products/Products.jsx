import React, { useState } from "react";
import { Link } from "react-router-dom";
import shirt1 from "../../assets/products/p1.jpg";
import shirt2 from "../../assets/products/p2.jpg";
import shirt3 from "../../assets/products/p3.jpg";
import shirt4 from "../../assets/products/p4.jpg";
import shirt5 from "../../assets/products/f1.jpg";
import shirt6 from "../../assets/products/f2.jpg";
import shirt7 from "../../assets/products/f3.jpg";
import shirt8 from "../../assets/products/f4.jpg";
import shirt9 from "../../assets/products/f7.jpg";
import shirt10 from "../../assets/products/f8.jpg";
import shirt11 from "../../assets/products/n6.jpg";
import "./Products.css";
import Nav from "../Nav/Nav";

const products = [
  { id: 1, image: shirt1, title:"Camisa",price: "49.99 EUR", category: 'shirt',},
{ id: 2, image: shirt2, title:"Camisa",price: "29.99 EUR" , category: 'pants'},
{ id: 3, image: shirt3, title:"Camisa",price: "49.99 EUR", category: 'top'},
{ id: 4, image: shirt4, title:"Camisa",price: "19.99 EUR", category: 'boides'},
{ id: 5, image: shirt5, title:"Camisa",price: "29.99 EUR", category: 'hat'},
{ id: 6, image: shirt6, title:"Camisa",price: "39.99 EUR",category: 'bikini'},
{ id: 7, image: shirt7, title:"Camisa",price: "45.99 EUR", category: 'dress'},
{ id: 8, image: shirt8, title:"Camisa",price: "22.99 EUR", category: 'vest'},
{ id: 9, image: shirt10, title:"Camisa",price: "49.99 EUR", category: 'shirt',},
{ id: 10, image: shirt11, title:"Camisa",price: "29.99 EUR" , category: 'pants'},
{ id: 11, image: shirt9, title:"Camisa",price: "49.99 EUR", category: 'top'},
{ id: 12, image: shirt4, title:"Camisa",price: "19.99 EUR", category: 'boides'},
{ id: 13, image: shirt1, title:"Camisa",price: "29.99 EUR", category: 'hat'},
{ id: 14, image: shirt2, title:"Camisa",price: "39.99 EUR",category: 'bikini'},
{ id: 15, image: shirt3, title:"Camisa",price: "45.99 EUR", category: 'dress'},
{ id: 16, image: shirt4, title:"Camisa",price: "22.99 EUR", category: 'vest'},
];

function Products() {
  const [visible, setVisible] = useState("container-products-active");
  const [category, setCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      filterByCategory();
    }
  };

  const filterByCategory = () => {
    if (category === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.category.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <>
      <Nav setVisible={setVisible} />
      <div className={`container-products ${visible}`}>
        <div className="buscador-product">
          <input
            value={category}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            type="text"
            placeholder="Search an article, top, pants, shirt"
            name="search"
          />
        </div>
        <div className="grid-products">
          {filteredProducts.map((product) => (
            <div className="product" key={product.id}>
              <div className="description-product">
                <Link to={`/products/${product.id}`}>
                  <img src={product.image} alt={product.title} />
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
