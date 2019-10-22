import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import Main from "./main"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "cymk.jpg" }) {
        childImageSharp {
          fixed(quality: 85, height: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <>
      <Header />
      <Main
        children={children} 
        background={data.placeholderImage.childImageSharp.fixed.src} /> 
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
