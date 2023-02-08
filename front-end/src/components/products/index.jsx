import React from 'react'
import data from "./data.js"

function Products() {
    console.log(data.products)
  return (
    <div>
    {
        data.products.map(product => (
        <div key={product.slug}>
            <a href={'/product/${product.slug}'}>
            <img src={product.image} alt="product-name" />
            </a>
            <p>
                {product.name}
            </p>
            <p>
                {product.price}
            </p>
            <button>Agregar al carrito</button>
        </div>))
    }
    </div>
  )
}

export default Products