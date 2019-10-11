import React from "react"
import { Link } from "gatsby"
import Image from "./image"
import "./logo.css"

const Logo = () => (
  <span className="logo">
    <Link to="/">
      <Image src="logo.png" />
    </Link>
  </span>
)

export default Logo
