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
        <li class="whatsapp">067 259 4314</li>
        <li class="mobile">067 259 4314</li>
        <li class="email">cj.trading.signs@gmail.com</li>
        <li class="website">www.cj-trading-signs.com</li>
        <li class="facebook">
          <a href="https://www.facebook.com/CJ.McAughey/?eid=ARBGrQnsG6W76wyaBwuCPbK_DVtFonPCAx9Odej8ZcBw_RogbTIdzTIhHkQ_8ZZXOMHvHwDyQhJzsS3K">
            Facebook
          </a>
        </li>
      </ul>
    </Squash>
  </Layout>
)

export default ContactPage
