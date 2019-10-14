import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BeePage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bee.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const image = data.placeholderImage.childImageSharp.fluid
  return (
    <Layout>
      <SEO title={`BEE Status`} />
      <h1>BEE Status</h1>
      <Img fluid={image} />
    </Layout>
  )
}

export default BeePage
