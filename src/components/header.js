import React, { Component } from "react"
import Bar from "./bar"
import Logo from "./logo"
import Menu from "./menu"
import Menubar from "./menubar"
import "./header.css"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  toggleMenuOpen = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render() {
    return (
      <>
        <Bar
          person={"person"}
          address={"address"}
          facebook={"facebook"}
          whatsapp={"whatsapp"}
          mobile={"mobile"}
          website={"website"}
          email={"email"}
        />
        <header className="header">
          <div className="wrapper">
            <Logo />
            <Menu onClick={this.toggleMenuOpen} active={this.state.menuOpen} />
          </div>
        </header>
        <Menubar opened={this.state.menuOpen} />
      </>
    )
  }
}

export default Header
