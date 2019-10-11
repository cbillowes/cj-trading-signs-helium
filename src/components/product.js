import React from "react"
import _ from "lodash"

import Image from "./image"
import "./product.css"

const Product = ({ name, image, description }) => (
  <div 
    id={_.kebabCase(name)}
    className="product"
  >
    <h1>{name}</h1>
    <Image src={image} />
    <p>{description}</p>
  </div>
)

export default Product
