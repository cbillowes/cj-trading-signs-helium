import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Products from "../components/products"

const title = `Products`
const description = `We fulfil your printing needs.
Personalised mugs, cups, caps, puzzles, lighters, clocks, shirts, 
coasters, plates, mouse pads, stickers, safety signs and more.`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          products {
            name
            image
            description
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO 
        title={title}
        description={description}
      />
      <Products collection={data.site.siteMetadata.products} />
    </Layout> 
  )
}

export default IndexPage
