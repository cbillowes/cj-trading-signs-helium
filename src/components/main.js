import React from "react"
import "./main.css"

const Main = ({ background, children }) => {
  console.log(background)
  return (
    <div
      className="main background"
      style={{
        backgroundImage: `url(${background})`
      }}
    >
      <div className="main wrapper">
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Main
