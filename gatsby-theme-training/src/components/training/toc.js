import styled from '@emotion/styled';
import cx from 'classnames';
import { Link } from 'gatsby';
import React from 'react';
import ChevronIcon from './chevron-icon';
import { appbarHeight, mobileWidth, space, tocWidth } from './styles';
import {
  inner,
  item,
  itemActive,
  li,
  link,
  linkActive,
  ol,
  title as titleStyle,
  titleActive,
} from './toc.module.scss';

const TableOfContentsSection = ({ nodes, title, pathname }) => {
  const withSection = title !== 'null';

  const [isActive, setIsActive] = React.useState(() =>
    nodes.some(node => node.fields.slug === pathname)
  );

  React.useEffect(() => {
    if (!isActive && nodes.some(node => node.fields.slug === pathname)) {
      setIsActive(true);
    }
  }, [pathname]);

  return (
    <>
      {withSection && (
        <li className={cx(li, titleStyle, isActive && titleActive)}>
          <button onClick={() => setIsActive(!isActive)}>
            {title} <ChevronIcon />
          </button>
        </li>
      )}
      {nodes.map(({ frontmatter: { title }, fields: { slug } }) => (
        <li className={cx(li, item, isActive && itemActive)} key={slug}>
          <Link
            className={link}
            activeClassName={linkActive}
            to={slug}
            onFocus={isActive ? undefined : () => setIsActive(true)}
          >
            {title}
          </Link>
        </li>
      ))}
    </>
  );
};

const Nav = styled.nav`
  padding: ${space}px 0;
  background-color: #eeeeee;

  @media screen and (min-width: ${mobileWidth}) {
    position: fixed;
    top: ${appbarHeight};
    bottom: 0;
    right: 0;
    width: ${tocWidth};
  }
`;

const Toc = ({ pathname, sections }) => {
  return (
    <Nav>
      <div className={inner}>
        <ol className={ol}>
          {sections.map(({ nodes, title }) => (
            <TableOfContentsSection
              nodes={nodes}
              title={title}
              pathname={pathname}
              key={title}
            />
          ))}
        </ol>
      </div>
    </Nav>
  );
};

export default Toc;
