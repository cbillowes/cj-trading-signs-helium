import _ from "lodash"
import React, { Component } from "react"
import Select from "react-select"
import Layout from "../components/layout"
import Squash from "../components/squash"
import SEO from "../components/seo"
import Pricing from "../components/pricing"
import printing from "../data/Pricing/Printing"
import heat from "../data/Pricing/Heat"
import "./pricing.css"

const title = `Pricing`
const description = `Think copies, printing, lamination, emailing, typing,
design and vinyl heat transfers.`
const pricing = printing.concat(heat)

const options = pricing.map(p => {
  return {
    value: _.kebabCase(p.category),
    label: p.category,
  }
})

class PricingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: ""
    }
  }

  toggleCategory = (option) => {
    this.setState({
      category: option.value
    })
  }

  isActiveCategory = (category) => {
    return category === this.state.category
  }

  render() {
    return (
      <>
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

            <nav className="dropdown" role="navigation">
              <Select 
                className="dropdown-item"
                options={options}
                onChange={this.toggleCategory}
              />
            </nav>

            {printing.map(p => {
              const category = _.kebabCase(p.category)
              return <Pricing pricing={p} heading="Print Copies" show={this.isActiveCategory(category)} />
            })}
            {heat.map(p => {
              const category = _.kebabCase(p.category)
              return <Pricing pricing={p} heading="Heat Transfers" show={this.isActiveCategory(category)} />
            })}
          </Squash>
        </Layout>
      </>
    )
  }
}

export default PricingPage
