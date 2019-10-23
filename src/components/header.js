import React, { Component } from "react"
import Bar from "./bar"
import Logo from "./logo"
import Slogan from "./slogan"
import "./header.css"

class Header extends Component {
  render() {
    return (
      <>
        <Bar />
        <header className="header">
          <div className="wrapper">
            <Logo />
            <Slogan />
          </div>
        </header>
      </>
    )
  }
}

export default Header
