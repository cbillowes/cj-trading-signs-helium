import React, { Component } from "react"
import "./slogan.css"

class Header extends Component {
  render() {
    return (
      <>
        <div
          className="slogan"
        >
          <span
            className="heading"
          >
            We fulfil your printing needs.
          </span>
          <span
            className="details"
          >
            With personalised mugs, cups, caps, puzzles, lighters, clocks, shirts,
            coasters, plates, mouse pads, stickers, safety signs and more.
          </span>
        </div>
      </>
    )
  }
}

export default Header
