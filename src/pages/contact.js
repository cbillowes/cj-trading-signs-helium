import React from "react"
import Layout from "../components/layout"
import Squash from "../components/squash"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title={`Contact Us`} />
    <Squash>
      <h1>Contact Us</h1>
      <ul className="boxes">
        <li className="c">
          <strong>Call or Whatsapp us.</strong><br/>
          <a href="tel:+27672594314">067 259 4314</a>
        </li>
        <li className="y">
          <strong>Pop us an email.</strong><br/>
          <a href="mailto:cj.trading.signs@gmail.com">cj.trading.signs@gmail.com</a>
        </li>
        <li className="m">
          <strong>Visit and share our website.</strong><br/>
          <a href="https://www.cj-trading-signs.com">www.cj-trading-signs.com</a>
        </li>
        <li className="k">
          <strong>Like us on Facebook.</strong><br/>
          <a href="https://www.facebook.com/CJ.McAughey">
            CJ.McAughey
          </a> 
        </li>
      </ul>
    </Squash>
  </Layout>
)

export default ContactPage
