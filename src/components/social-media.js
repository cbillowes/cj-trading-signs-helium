import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaFacebook, FaWhatsapp, FaMobileAlt, FaEnvelope } from "react-icons/fa"
import Anchor from "./anchor"
import "./social-media.scss"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          contact {
            facebook
            whatsapp
            mobile
            email
          }
        }
      }
    }
  `)
  const {
    facebook,
    whatsapp,
    mobile,
    email
  } = data.site.siteMetadata.contact

  return (
    <>
      <Anchor url={facebook} className="icon facebook">
        <FaFacebook />
      </Anchor>
      <Anchor url={"tel:" + whatsapp} className="icon whatsapp">
        <FaWhatsapp />
      </Anchor>
      <Anchor url={"tel:" + mobile} className="icon mobile">
        <FaMobileAlt />
      </Anchor>
      <Anchor url={"mailto:" + email} className="icon email">
        <FaEnvelope />
      </Anchor>
    </>
  )
}

export default Contact
