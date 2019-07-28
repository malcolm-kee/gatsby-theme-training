import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { getContrastTextColor } from '../../lib/color';
import { bar } from './appbar.module.scss';

const Appbar = ({
  linkTarget = '/',
  backgroundColor = '#e44d26',
  color = getContrastTextColor(backgroundColor),
}) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className={bar} style={{ backgroundColor, color }}>
      <Link to={linkTarget}>{data.site.siteMetadata.title}</Link>
    </header>
  );
};

export default Appbar;
