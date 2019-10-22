import React, { Component } from "react"
import "./footer.css"

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
      &copy; {new Date().getFullYear()} CJ Trading &amp; Signs
      {` `}
      &#x1f5a8;
      We fulfil your printing needs
    </footer>
    )
  }
}

export default Footer
