import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./logo.css"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const image = data.placeholderImage.childImageSharp.fluid
  return (
    <span className="logo">
      <Link to="/">
        <Img fluid={image} />
      </Link>
    </span>
  )
}

export default Logo