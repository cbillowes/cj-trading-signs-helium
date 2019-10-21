import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "cymk.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <>
      <Header />
      <div
        className="main background"
        style={{
          backgroundImage: `url(${data.placeholderImage.childImageSharp.fluid.src})`
        }}
      >
        <div className="main wrapper">
          <main>{children}</main>
          <footer>
            &copy; {new Date().getFullYear()} CJ Trading &amp; Signs
            {` `}
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
