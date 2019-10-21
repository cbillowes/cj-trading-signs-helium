import React, { Component } from "react"
import Contact from "./contact"
import SocialMedia from "./social-media"
import Menu from "./menu"
import Menubar from "./menubar"
import "./bar.css"

class Bar extends Component {
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
      <div className="bar">
        <div className="wrapper">
          <Contact />
          <div className="icons">
            <SocialMedia />
            <Menu className="icon" onClick={this.toggleMenuOpen} active={this.state.menuOpen} />
          </div>
        </div>
        <Menubar opened={this.state.menuOpen} />
      </div>
    )
  }
}

export default Bar
