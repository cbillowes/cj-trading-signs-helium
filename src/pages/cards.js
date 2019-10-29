import React from "react"
import Layout from "../components/layout"
import Squash from "../components/squash"
import SEO from "../components/seo"
import "./boxes.scss"

const title = `Custom Cards & Invites`
const description = `Do you remember when you could pop in to a shop and 
buy a pack of party invites and special occasion cards? Now you can create 
your own personalised cards.`

const CardsPage = () => (
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
          <strong>Quantity.</strong><br/>
          You can print from one up.
        </li>
        <li className="y">
          <strong>Size.</strong><br/>
          A4 paper.
        </li>
        <li className="m">
          <strong>Colour.</strong><br/>
          Full colour, grayscale or black &amp; white.
        </li>
        <li className="k">
          <strong>Density.</strong><br/>
          80 or 160 gram.
        </li>
        <li className="c">
          <strong>Folding.</strong><br/>
          Half (A5) or Quarter (A6) folding.
        </li>
        <li className="y">
          <strong>Layout.</strong><br/>
          Portrait (tall) or Landscape (wide).
        </li>
        <li className="m">
          <strong>Ideas.</strong><br/>
          Cards and invites for all occasions.
          Any theme from Kiddies to Adult.
        </li>
        <li className="k">
          <strong>Personalised.</strong><br/>
          Make your card personal, from the heart or downright funny using your
          favourite jokes.
        </li>
      </ul>
    </Squash>
  </Layout>
)

export default CardsPage
