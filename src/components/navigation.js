import React from "react"
import { Link } from "gatsby"
import "./navigation.css"

const Navigation = () => (
  <span className="navigation">
    <Link to="/">Home</Link>
    <Link to="/copies">Copies &amp; Invites</Link>
    <Link to="/cards">Cards &amp; Invites</Link>
    <Link to="/mugs">Mugs, Plates, Shirts &amp; Caps</Link>
    <Link to="/vinyl">Vinyl Stickers &amp; Safety Signs</Link>
    <Link to="/prices">Prices</Link>
    <Link to="/contact">Contact Us</Link>
  </span>
)

export default Navigation