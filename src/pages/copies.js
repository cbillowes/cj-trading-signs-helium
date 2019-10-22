import React from "react"
import Layout from "../components/layout"
import Squash from "../components/squash"
import SEO from "../components/seo"
import "./boxes.css"

const CopiesPage = () => (
  <Layout>
    <SEO title={`Copies & Printing`} />
    <Squash>
      <h1>Copies &amp; Printing</h1>
      <p>
        We can type, scan, copy, print and laminate documents for you in black &amp;
        white and in colour, single sided and double up to A4.
      </p>
      <p>
        We operate in a security boom controlled Estate with parking on premises.
      </p>
      <ul className="boxes">
        <li className="c">
          <strong>Convenient.</strong><br/>
          You don't need to own a computer, printer, copier or laminator.
        </li>
        <li className="y">
          <strong>We can type for you.</strong><br/>
          Send us a document by email, memory stick or neatly written document.
        </li>
        <li className="m">
          <strong>Think professional.</strong><br/>
          We can type out, print or email a copy of your CV for you.
        </li>
        <li className="k">
          <strong>Want some copies?</strong><br/>
          Make photocopies in black &amp; white or full colour.
        </li>
        <li className="c">
          <strong>Get your documents.</strong><br/>
          Let us scan your documents for you. We can email and print them out.
        </li>
        <li className="y">
          <strong>Print it out.</strong><br/>
          We can scan and print out single &amp; double sided for you.
        </li>
        <li className="m">
          <strong>Protect your documents.</strong><br/>
          Laminate your valuable documents.
        </li>
        <li className="k">
          <strong>Collect your documents.</strong><br/>
          We are in a security boom controlled Estate with parking on the premises.
        </li>
        <li className="c">
          <strong>Current limitations.</strong><br/>
          Right now we only scan and print up to A4 sizes.
        </li>
      </ul>
    </Squash>
  </Layout>
)

export default CopiesPage
