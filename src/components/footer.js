import React, { Component } from "react"
import "./footer.css"

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
      &copy; {new Date().getFullYear()} CJ Trading &amp; Signs
      {` `}
    </footer>
    )
  }
}

export default Footer
