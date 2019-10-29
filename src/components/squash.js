import React from "react"
import "./squash.scss"

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