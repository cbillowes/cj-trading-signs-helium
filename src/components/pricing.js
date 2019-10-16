import _ from "lodash"
import React from "react"
import "./pricing.css"

const formatter = new Intl.NumberFormat("en-ZA", {
  style: "currency",
  currency: "ZAR"
})

const Pricing = ({ data: pricing }) => {
  let productIdx = 0
  return (
    <section className="pricing">
      <div>
        {pricing.products.map(d => {
          let pricingIdx = 0
          const productKey = _.kebabCase(
            `product ${d.category} ${productIdx++}`
          )
          return (
            <>
              <ul className="products" key={productKey}>
                {d.products.map(p => {
                  let idx = 0
                  let category = <></>
                  if (d.category) {
                    category = (
                      <li key={_.kebabCase(d.category)} className="category">
                        {d.category} {category}
                      </li>
                    )
                  }
                  return (
                    <>
                      <li className="product">{pricing.category}</li>
                      {category}
                      <li className="product-name">
                        {`${p.name} (${pricing.breakdown})`}
                      </li>
                      <li key={_.kebabCase(`pricing ${pricingIdx++}`)}>
                        <ul className="prices">
                          {p.prices.map(p => {
                            return (
                              <li>
                                <span className="qty">
                                  {pricing.descriptions[idx++]}
                                </span>
                                <span className="price">
                                  {formatter.format(p)}
                                </span>
                              </li>
                            )
                          })}
                        </ul>
                      </li>
                    </>
                  )
                })}
              </ul>
            </>
          )
        })}
      </div>
    </section>
  )
}

export default Pricing
