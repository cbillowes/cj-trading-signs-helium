import React from "react"
import { FaEllipsisV } from 'react-icons/fa'
import "./menu.css"

const Menu = ({ className, active, onClick }) => (
  <span 
    className={`menu ${className} ${active ? "active" : ""}`}
    onClick={onClick.bind(this)}>
   <FaEllipsisV />
  </span>
)

export default Menu