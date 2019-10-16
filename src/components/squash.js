import React from "react"

const Squash = ({ children }) => {
  return (
    <div style={{ maxWidth: "640px", margin: "0 auto" }}>
      {children}
    </div>
  )
}

export default Squash