import _ from "lodash"
import React from "react"
import Img from "gatsby-image"
import "./product.css"

const Product = ({ name, image, orientation, description }) => {
  return (
    <div 
      id={_.kebabCase(name)}
      className="product"
    >
      <h1>{name}</h1>
      <Img 
        key={_.kebabCase(`product img ${name}`)} 
        className={orientation}
        fixed={image} />
      <p>{description}</p>
    </div>
  )
}

export default Product
