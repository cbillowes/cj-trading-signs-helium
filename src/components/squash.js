import React from "react"
import "./squash.css"

const Squash = ({ children }) => {
  return (
    <div className="squash">
      <div>
        {children}
      </div>
    </div>
  )
}

export default Squash