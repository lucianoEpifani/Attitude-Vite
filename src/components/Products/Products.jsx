import React from 'react'

function Products() {
  return (
    <div className='container-products'>
        <div className="buscador-product">
        <input type="text" placeholder='Busca un articulo'/>
        </div>
        <div className="grid-products">
            <img src="" alt="" />
            <div className="descrition-product">
            <h3>Vestido</h3>
            <span>39.99 EUR</span>
            </div>
        </div>
    </div>
  )
}

export default Products