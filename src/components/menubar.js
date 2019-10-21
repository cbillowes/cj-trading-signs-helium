import React, { Component } from "react"
import { window } from "browser-monads"
import { useStaticQuery, graphql, Link } from "gatsby"
import _ from "lodash"
import "./menubar.css"

class Menubar extends Component {
  constructor(props) {
    super(props)

    const windowContext = this.props.window ? this.props.window : window
    const pathname = windowContext.location.pathname
    const pathSegment = this.getPathSegment(pathname)
    this.state = {
      navigation: props.navigation,
      toggle: props.toggle,
      pathSegment: pathSegment
    }
  }

  getPathSegment = pathname => {
    if (pathname !== "/") {
      const pathSegments = pathname.split("/")
      return `/${pathSegments[1]}`
    }
    return pathname
  }

  isSelected = url => {
    return this.state.pathSegment === url
  }

  render() {
    return (
      <nav className={`menubar ${this.props.opened ? "opened" : "closed"}`}>
        <ul>
          {this.state.navigation.map(item => {
            return (
              <li key={_.kebabCase(item.name)} className="menuitem">
                <Link
                  className={`${this.isSelected(item.url) ? "selected" : ""}`}
                  to={item.url}
                >
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default ({ opened, onClick }) => {
  const data = useStaticQuery(graphql`
    query NavigationQuery {
      site {
        siteMetadata {
          navigation {
            url
            name
          }
        }
      }
    }
  `)
  return (
    <Menubar opened={opened} toggle={onClick} {...data.site.siteMetadata} />
  )
}
