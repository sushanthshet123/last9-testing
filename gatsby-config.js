/*eslint-disable */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Last9`,
    description: `Site Description`,
    author: `@gatsbyjs`,
    siteUrl: `https://last9-git-review-changes-zysktech.vercel.app/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // Where the animated svgs are.
        }
      }
    },
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: process.env.GATSBY_GHOST_API_URL,
        contentApiKey: process.env.GATSBY_GHOST_API_KEY,
      },
    },
    
    'gatsby-plugin-postcss',
  ],
}

