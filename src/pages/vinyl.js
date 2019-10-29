import React from "react"
import Layout from "../components/layout"
import Squash from "../components/squash"
import SEO from "../components/seo"
import "./boxes.scss"

const title = `Vinyl Stickers & Safety Signs`
const description = `We stock 3 and 8 year vinyl with a variety of colours
which can be used from toilet signage to advertising your sales prices and
bumper stickers. The vinyl we use is OSH compliant.`

const VinylPage = () => (
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
      <ul className="boxes">
        <li className="c">
          <strong>Stock.</strong><br/>
          We stock 3 and 8 year Vinyl.
        </li>
        <li className="y">
          <strong>Usage.</strong><br/>
          3 year vinyl is used mainly for indoors or short term outdoors.
          8 year vinyl is used for outdoors.
        </li>
        <li className="m">
          <strong>Variety.</strong><br/>
          A wide variety of vinyl colours &amp; clear and frosted glass is available.
        </li>
        <li className="k">
          <strong>Limitations.</strong><br/>
          Design colours are limited as each colour must be cut separately then
          assembled.
        </li>
        <li className="c">
          <strong>Long term options.</strong><br/>
          Long term Signs can be mounted on ABS plastic, Chromadek, or Aluminium
          boards.
        </li>
        <li className="y">
          <strong>Short term options.</strong><br/>
          Short term signs on Masonite, corrugated cardboard or corrugated
          plastic.
        </li>
        <li className="m">
          <strong>Ideas.</strong><br/>
          From Toilet signage to advertising your sales prices to bumper
          stickers.
        </li>
      </ul>
      <h2>Stay OSH act compliant</h2>
      <p>ABS, Chromadek, Aluminium, corrugated plastic or board</p>
      <ul>
        <li>Sublimation on Aluminium</li>
        <li>All safety signage</li>
        <li>All informative signage</li>
      </ul>
    </Squash>
  </Layout>
)

export default VinylPage
