import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FaFacebook,
  FaWhatsapp,
  FaLink,
  FaMobileAlt,
  FaEnvelope
} from "react-icons/fa"
import Anchor from "./anchor"
import "./bar.css"

const Bar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          contact {
            person
            address
            facebook
            whatsapp
            mobile
            website
            email
          }
        }
      }
    }
  `)
  const {
    person,
    address,
    facebook,
    whatsapp,
    mobile,
    website,
    email
  } = data.site.siteMetadata.contact

  return (
    <div className="bar">
      <span className="contact">{person}</span>
      <span className="address">{address}</span>
      <Anchor url={facebook} className="icon facebook">
        <FaFacebook />
      </Anchor>
      <Anchor url={"tel:" + whatsapp} className="icon whatsapp">
        <FaWhatsapp />
      </Anchor>
      <Anchor url={"tel:" + mobile} className="icon mobile">
        <FaMobileAlt />
      </Anchor>
      <Anchor url={website} className="icon url">
        <FaLink />
      </Anchor>
      <Anchor url={"mailto:" + email} className="icon email">
        <FaEnvelope />
      </Anchor>
    </div>
  )
}

export default Bar
