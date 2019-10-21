import React, { Component } from "react"
import Bar from "./bar"
import Logo from "./logo"
import "./header.css"

class Header extends Component {
  render() {
    return (
      <>
        <Bar />
        <header className="header">
          <div className="wrapper">
            <Logo />
          </div>
        </header>
      </>
    )
  }
}

export default Header
