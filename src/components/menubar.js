import React, { Component } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import _ from "lodash"
import "./menubar.css"

class Menubar extends Component {
  constructor(props) {
    super(props)

    const windowContext = this.getWindowContext(props)
    const pathSegment = this.getPathSegment(
      this.getPathname(windowContext)
    )
    this.state = {
      navigation: props.navigation,
      toggle: props.toggle,
      pathSegment: pathSegment
    }
  }

  getWindowContext = (props) => {
    const custom = (props.window) 
      ? props.window
      : {
        location: {
          pathname : "/"
        }
      }
    return (typeof window === "undefined") ? custom : window
  }

  getPathname = (context) => {
    return (typeof context.location === "undefined") 
      ? "/" 
      : context.location.pathname
  }

  getPathSegment = (pathname) => {
     if (pathname !== "/") {
       const pathSegments = pathname.split("/")
       return `/${pathSegments[1]}`
     }
     return pathname
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