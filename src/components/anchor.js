import _ from "lodash"
import React from "react"

const Anchor = ({url, className, children}) => {
  return (
    <a 
      key={_.kebabCase(`${Math.random() * 10} ${className} ${url}`)}
      href={url}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default Anchor