import React from 'react'
import './Product.css'

function Product() {
  return (
    <div>
         <section id="prodetails">
        <div class="single-product">
           <img src="./img/p1.jpg" id="mainImg" alt=""/>
        </div>
        <div class="single-details">
            <h6>Home / T-Shirt</h6>
            <h4>Men`s Fashion T Shirt</h4>
            <h2>45€</h2>
            <select>
                <option>Select Size</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
            </select>
            <input type="number" value="1"/>
            <button class="normal">Add to Cart</button>
            <h4>Product Details</h4>
            <span>
                The Hawaiian shirt is a summer style icon with a soft, lightweight texture, perfect for warm weather. Made from cool cotton fabric, it features a vibrant and colorful design adorned with tropical flowers and beach motifs. Its relaxed fit and short sleeves invite comfort, bringing a tropical and casual touch to any occasion - a garment that evokes the essence of paradise with every wear!
            </span>
        </div>
    </section>
    </div>
  )
}

export default Product