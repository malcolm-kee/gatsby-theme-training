/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'gatsby';
import { getContrastTextColor } from '../../lib/color';
import { appbarHeight, space } from './styles';

const Appbar = ({
  linkTarget = '/',
  backgroundColor = '#e44d26',
  color = getContrastTextColor(backgroundColor),
  children,
}) => {
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
        {children}
      </Link>
    </header>
  );
};

export default Appbar;
