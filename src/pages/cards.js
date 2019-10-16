import React from "react"
import Layout from "../components/layout"
import Squash from "../components/squash"
import SEO from "../components/seo"

const CardsPage = () => (
  <Layout>
    <SEO title={`Custom Cards & Invites`} />
    <Squash>
      <h1>Custom Cards &amp; Invites</h1>
      <p>
        Do you remember the days when you could pop into CNA and buy a pack of
        Party Invites or even Birthday/Christmas Cards, well now we offer custom
        cards in the quantity you require
      </p>
      <ul>
        <li>Any Quantity from 1 up.</li>
        <li>A4 paper.</li>
        <li>80 or 160 gram.</li>
        <li>Half (A5) or Quarter (A6) folding.</li>
        <li>Portrait (tall) or Landscape (wide) Styles.</li>
        <li>Cards and invites for all occasions.</li>
        <li>Any theme from Kiddies to Adult.</li>
        <li>Full Colour, Greyscale or B/W.</li>
      </ul>
    </Squash>
  </Layout>
)

export default CardsPage
