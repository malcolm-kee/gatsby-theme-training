import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

const Seo = ({ title, description, keywords, url }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            siteUrl
            description
          }
        }
      }
    `
  );

  const displayTitle = title || siteMetadata.title;
  const displayDescription = description || siteMetadata.description;
  const displayKeywords =
    Array.isArray(keywords) && keywords.length > 0 ? keywords.join() : null;

  return (
    <Helmet>
      <title>{displayTitle}</title>
      <meta name="author" content={siteMetadata.author} />
      <meta name="description" content={displayDescription} />
      {displayKeywords && <meta name="keywords" content={displayKeywords} />}
      {url && (
        <meta property="og:url" content={`${siteMetadata.siteUrl}${url}`} />
      )}
      <meta property="og:title" content={displayTitle} />
      <meta property="og:description" content={displayDescription} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={displayTitle} />
      <meta name="twitter:description" content={displayDescription} />
    </Helmet>
  );
};

export default Seo;
