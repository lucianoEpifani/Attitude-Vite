import React, { useState } from 'react'
import './Product.css'
import Nav from '../Nav/Nav'
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
import { useParams } from 'react-router-dom';


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

function Product() {

    const [visible, setVisibility] = useState("visible");

    const { id } = useParams();
    const productId = parseInt(id);

    const findProduct = products.find(product => product.id === productId);
    console.log(findProduct);
        
    return (

    <>
        <Nav/>
         <section id="prodetails">
        <div class="single-product">
           <img src={findProduct.image}/>
        </div>
        <div class="single-details">
            <h6>{findProduct.title}</h6>
            <h4>Men`s Fashion T Shirt</h4>
            <h2>{findProduct.price}</h2>
            <select>
                <option>Select Size</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
            </select>
            <input type="number" value={1} max="100" min="0"/>
            <button class="normal">Add to Cart</button>
        </div>
    </section>
   <div className="product-description">
   <h4>Description</h4>
            <p>
                The Hawaiian shirt is a summer style icon with a soft, lightweight texture, perfect for warm weather. 
                Made from cool cotton fabric, it features a vibrant and colorful design adorned with tropical flowers and beach motifs. 
                Its relaxed fit and short sleeves invite comfort, bringing a tropical and casual touch to any occasion - a garment that evokes the essence of paradise with every wear!
            </p>
   </div>
    </>
  )
}

export default Product