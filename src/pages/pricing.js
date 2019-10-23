import _ from "lodash"
import React from "react"
import Layout from "../components/layout"
import Squash from "../components/squash"
import SEO from "../components/seo"
import Pricing from "../components/pricing"
import printing from "../data/Pricing/Printing"
import heat from "../data/Pricing/Heat"

const title = `Pricing`
const description = `Think copies, printing, lamination, emailing, typing,
design and vinyl heat transfers.`
const PricingPage = () => (
  <Layout>
    <SEO 
      title={title} 
      description={description}
    />
    <Squash>
      <h1>{title}</h1>
      <p>
        {description}
      </p>
      <p>
        We cannot print directly onto Vinyl or Embroidery yet. We will find the
        best deal for you through outsourcing.
      </p>
      <p>Contact us if you don't see what you are looking for.</p>

      <h2>Print Copy Prices</h2>
      {printing.map(p => {
        return <Pricing data={p} />
      })}
      <h2>Heat Transfers</h2>
      {heat.map(p => {
        return <Pricing data={p} />
      })}
    </Squash>
  </Layout>
)

export default PricingPage
