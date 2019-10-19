const path = require('path')
const products = require('./src/data/Products')
const navigation = require('./src/data/Navigation')

module.exports = {
  siteMetadata: {
    title: `Printing | CJ Trading & Signs | Springs`,
    description: `Fulfil your printing needs`,
    contact: {
      person: "Carol McAughey",
      address: "1859 Grootvlei Res Estate, Strubenvale Ext 2, Springs, Gauteng",
      facebook: "https://www.facebook.com/CJ.McAughey/",
      whatsapp: "+27672594314",
      mobile: "+27672594314",
      website: "https://www.cj-trading-signs.com",
      email: "mailto:cj.trading.signs@gmail.com",
    },
    products: products,
    navigation: navigation,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#38b6ff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
