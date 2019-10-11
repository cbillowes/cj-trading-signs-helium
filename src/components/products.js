import React from "react"
import Product from "./product"
import "./products.css"

const Products = ({ collection }) => {
  const products = collection.map(p => {
    return (
      <Product 
        name={p.name} 
        image={p.image} 
        description={p.description} />
    )
  })

  return (
    <div className="products">{products}</div>
  )
}

export default Products
