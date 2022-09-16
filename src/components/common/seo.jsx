import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, children }) {
  const { site } = useStaticQuery(
    // eslint-disable-next-line no-use-before-define
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const fbimg = "/home/banner.jpg";
  const twitterimg = "/home/banner.jpg"
  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title} </title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content={url} /> */}
      <meta property="og:image" content={`${fbimg}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta property="twitter:site" content="@last9io" />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${twitterimg}`} />
      {children}
    </>
  )
}

Seo.defaultProps = { description: `` }

Seo.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
}

export default Seo
