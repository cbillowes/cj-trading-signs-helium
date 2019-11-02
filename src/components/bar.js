import React, { Component } from "react"
import Contact from "./contact"
import GetInTouch from "./get-in-touch"
import Menu from "./menu"
import Menubar from "./menubar"
import "./bar.scss"

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
      <>
        <div className="bar">
          <div className="wrapper">
            <Contact />
            <div className="icons">
              <GetInTouch />
              <Menu 
                className="icon" 
                onClick={this.toggleMenuOpen} active={this.state.menuOpen} 
              />
            </div>
          </div>
        </div>
        <Menubar 
          className="menubar" 
          opened={this.state.menuOpen} 
        />
      </>
    )
  }
}

export default Bar
