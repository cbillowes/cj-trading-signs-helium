import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import Main from "./main"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="sticky">
      <Header />
      <Main
        children={children} /> 
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
