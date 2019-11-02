import React, { Component } from "react"
import { window } from "browser-monads"
import { useStaticQuery, graphql, Link } from "gatsby"
import _ from "lodash"

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
    const styles = ["c", "y", "m", "k"]
    let idx = 0

    return (
      <nav className={`${this.props.className} ${this.props.opened ? "opened" : "closed"}`}>
        <ul>
          {this.state.navigation.map(item => {
            return (
              <li 
                key={_.kebabCase(item.name)} 
                className={`menuitem ${styles[idx++%styles.length]}`}
              >
                <Link
                  className={`${this.isSelected(item.url) ? "selected" : ""}`}
                  to={item.url}
                >
                  <span>{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default ({ opened, onClick, className }) => {
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
    <Menubar 
      opened={opened} 
      toggle={onClick}
      className={className}
      {...data.site.siteMetadata} />
  )
}
