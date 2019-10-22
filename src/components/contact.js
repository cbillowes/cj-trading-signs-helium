import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./contact.css"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          contact {
            person
            address
          }
        }
      }
    }
  `)
  const { person, address } = data.site.siteMetadata.contact

  return (
    <div className="contact">
      <div className="person">{person}</div>
      <div className="address">{address}</div>
    </div>
  )
}

export default Contact
