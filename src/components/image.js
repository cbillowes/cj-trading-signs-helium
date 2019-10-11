import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ src }) => {
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

  return data.allImageSharp.edges.map(d => {
    const fixed = d.node.fixed
    if (fixed.originalName === src)
      return <Img key={fixed.originalName} fixed={d.node.fixed} />
      return <></>
  })
}

export default Image
