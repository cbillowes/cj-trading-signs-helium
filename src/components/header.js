import React, { Component } from "react"
import Logo from "./logo"
import Menu from "./menu"
import Menubar from "./menubar"
import "./header.css"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  toggleMenuOpen = () => {
    this.setState({
      menuOpen: !this.state.menuOpen,
    })
  }

  render() {
    return (
      <>
        <header className="header">
          <Logo />
          <Menu
            onClick={this.toggleMenuOpen}
            active={this.state.menuOpen} />
        </header>
        <Menubar
          opened={this.state.menuOpen} />
      </>
    )
  }
}

export default Header
