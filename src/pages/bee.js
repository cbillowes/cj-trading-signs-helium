import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Squash from "../components/squash"
import SEO from "../components/seo"

const title = `BEE Status`
const description = `We are a registered Level Four company operating in a 
security boom controlled Estate with parking on the premises.`

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
      <Squash>
        <SEO 
          title={title} 
          description={description} 
        />
        <h1>BEE Status</h1>
        <p>
          {description}
        </p>
        <Img fluid={image} />
      </Squash>
    </Layout>
  )
}

export default BeePage
