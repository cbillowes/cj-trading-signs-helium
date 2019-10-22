import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./main.css"

const Main = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "cymk.jpg" }) {
        childImageSharp {
          fixed(quality: 85, height: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div
      className="main background"
      style={{
        backgroundImage: `url(${data.placeholderImage.childImageSharp.fixed.src})`
      }}
    >
      <div className="main wrapper">
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Main
