import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import products from "../data/Products"

const Test = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const children = data.placeholderImage.childImageSharp
  console.log(children)
  // const image = nodes.map(n => {
  //   const originalName = n.node.sizes.originalName
  //   const sizes = n.node.sizes
  //   if (originalName === "logo.png")
  //     return sizes
  // })

  return <pre>{JSON.stringify(products)}</pre>
}

export default Test