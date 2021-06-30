/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { getContrastTextColor } from '../../lib/color';
import { appbarHeight, primaryColor, space } from './styles';

const Appbar = ({
  linkTarget = '/',
  backgroundColor = primaryColor,
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
    <header
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        margin: 0 auto;
        padding: ${space}px ${space * 2}px;
        min-height: ${appbarHeight};
        display: flex;
        font-size: 1.3rem;
        align-items: center;
        background-color: ${backgroundColor};
        color: ${color};
        z-index: 2;
      `}
    >
      <Link
        css={css`
          color: inherit;
          text-decoration: none;
        `}
        to={linkTarget}
      >
        {data.site.siteMetadata.title}
      </Link>
    </header>
  );
};

export default Appbar;
