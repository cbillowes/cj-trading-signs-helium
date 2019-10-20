import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Product from "./product"
import "./products.css"

const getImageNodes = (data, src) => {
  const images = data.allImageSharp.edges.map(n => {
    const fixed = n.node.fixed
    if (fixed.originalName === src) return fixed
    return {}
  })
  const valid = images.filter(
    value => value !== undefined && Object.keys(value).length !== 0
  )
  return valid
}

const Products = ({ collection }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fixed(height: 400) {
              originalName
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)
  const products = collection.map(p => {
    const fixedImage = getImageNodes(data, p.image)[0]
    return (
      <Product name={p.name} image={fixedImage} description={p.description} />
    )
  })

  return <div className="products">{products}</div>
}

export default Products
