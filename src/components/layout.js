import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="bg">
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1440,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0
          }}
        >
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
