import _ from "lodash"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pricing from "../components/pricing"
import printing from "../data/Pricing/Printing"
import heat from "../data/Pricing/Heat"

const PricingPage = () => (
  <Layout>
    <SEO title={`Pricing`} />
    <h1>Pricing</h1>
    <p>
      We cannot do print directly onto Vinyl or Embroidery yet, we will find the
      best deal for you through outsourcing.
    </p>
    <p>Contact us if you don't see the price you are looking for.</p>

    <h2>Print Copy Prices</h2>
    {printing.map(p => {
      return (
        <Pricing data={p} />
      )
    })}
    {heat.map(p => {
      return (
        <Pricing data={p} />
      )
    })}
  </Layout>
)

export default PricingPage
