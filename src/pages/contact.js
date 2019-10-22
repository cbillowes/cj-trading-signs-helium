import React from "react"
import Layout from "../components/layout"
import Squash from "../components/squash"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title={`Contact Us`} />
    <Squash>
      <h1>Contact Us</h1>
      <ul>
        <li className="whatsapp">067 259 4314</li>
        <li className="mobile">067 259 4314</li>
        <li className="email">cj.trading.signs@gmail.com</li>
        <li className="website">www.cj-trading-signs.com</li>
        <li className="facebook">
          <a href="https://www.facebook.com/CJ.McAughey/?eid=ARBGrQnsG6W76wyaBwuCPbK_DVtFonPCAx9Odej8ZcBw_RogbTIdzTIhHkQ_8ZZXOMHvHwDyQhJzsS3K">
            Facebook
          </a>
        </li>
      </ul>
    </Squash>
  </Layout>
)

export default ContactPage
