import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Squash from "../components/squash"
import SEO from "../components/seo"

const MugsPage = () => (
  <Layout>
    <SEO title={`Mugs, Plates, Shirts & Caps`} />
    <Squash>
      <h1>Mugs, Plates, Shirts &amp; Caps</h1>
      <p>
        We print on shirts, puzzles, mugs, plates, golf caps, aprons and more.
        What you print is totally up to you.
      </p>
      <ul className="boxes">
        <li className="c">
          <strong>Options.</strong>
          <br />
          Shirts, puzzles, mugs, plates, golf caps, aprons, you name it.{" "}
          <Link to="/contact">Contact us</Link> to get more options.
        </li>
        <li className="y">
          <strong>Imagine.</strong>
          <br />
          What is printed is totally up to you.
        </li>
        <li className="m">
          <strong>Ideas.</strong>
          <br />A photo, your company branding, a logo or your slogan.
        </li>
        <li className="k">
          <strong>Caps.</strong>
          <br />
          Caps you can choose between full colour transfers or max 3 colour heat
          applied vinyl.
        </li>
        <li className="c">
          <strong>Puzzles.</strong>
          <br />
          Puzzles are personalised but only in A4 with big or small pieces.
        </li>
        <li className="y">
          <strong>High visibility vests.</strong>
          <br />
          High visibility vests, branded with designation and names.
        </li>
      </ul>
    </Squash>
  </Layout>
)

export default MugsPage
