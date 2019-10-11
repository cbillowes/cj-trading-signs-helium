import React from "react"
import { FaEllipsisV } from 'react-icons/fa'
import "./menu.css"

const Menu = ({ active, onClick }) => (
  <span 
    className={`menu ${active ? "active" : ""}`}
    onClick={onClick.bind(this)}>
   <FaEllipsisV />
  </span>
)

export default Menu