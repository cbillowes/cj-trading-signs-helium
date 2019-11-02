import React, { Component } from "react"
import Menubar from "./menubar"
import "./footer.scss"

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        &copy; {new Date().getFullYear()} CJ Trading &amp; Signs
        {` `}
        &#x1f5a8; We fulfil your printing needs
        <Menubar className="navigation" opened={true} />
      </footer>
    )
  }
}

export default Footer
