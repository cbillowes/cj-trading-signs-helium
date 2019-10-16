import React, { Component } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import _ from "lodash"
import "./menubar.css"

class Menubar extends Component {
  constructor(props) {
    super(props)

    const windowContext = this.getWindowContext(
      (props !== undefined || props.window) ? props.window : window
    )
    const pathSegment = this.getPathSegment(
      windowContext
    )
    this.state = {
      navigation: props.navigation,
      toggle: props.toggle,
      pathSegment: pathSegment
    }
  }

  getWindowContext = (window) => {
    const defaultWindow = {
      location: {
        pathname: "/",
      }
    }
    return (window) ? window : defaultWindow
  }

  getPathSegment = (windowContext) => {
     const path = windowContext.location.pathname
     if (path !== "/") {
       const pathSegments = path.split("/")
       return `/${pathSegments[1]}`
     }
     return path
  }

  isSelected = (url) => {
    return this.state.pathSegment === url
  }

  render() {
    return (
      <header
        className={`menubar ${this.props.opened ? "opened" : "closed"}`}>
          <ul>
            {this.state.navigation.map((item) => {
              return (
                <li
                  key={_.kebabCase(item.name)}
                  className="menuitem">
                    <Link 
                      className={`${this.isSelected(item.url) ? "selected" : ""}`}
                      to={item.url}>{item.name}</Link>
                </li>
              )
            })}
          </ul>
      </header>
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