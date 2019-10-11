import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Products from "../components/products"

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
      <SEO title="Home" />
      <Products collection={data.site.siteMetadata.products} />
    </Layout> 
  )
}

export default IndexPage
