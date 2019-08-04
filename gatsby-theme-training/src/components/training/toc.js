import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import ChevronIcon from './chevron-icon';
import { appbarHeight, mobileWidth, space, tocWidth } from './styles';

const Li = styled.li`
  list-style-type: none;
  padding: 0 ${space}px;
  line-height: 1.75;
  margin-bottom: 0;
`;

const Item = styled(Li)`
  max-height: 0;
  transition: max-height 0.5s ease;
  overflow: hidden;
  ${({ isActive }) => (isActive ? `max-height: 150px;` : '')}
`;

const Title = styled(Li)`
  display: block;
  padding: ${space}px ${space * 2}px;

  > button {
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    appearance: none;
    width: 100%;
    text-align: left;
    border: none;
    cursor: pointer;
    background: transparent;
    color: inherit;

    &:hover,
    &:focus {
      color: hsl(12, 78%, 35%);
    }

    svg {
      margin-left: $space;
      ${({ isActive }) => (isActive ? `transform: rotate(180deg);` : '')}
    }
  }
`;

const LessonLink = styled(Link)`
  color: inherit;
  font-size: 0.85rem;
  display: block;
  padding: ${space / 2}px ${space * 2}px;
  text-decoration: none;
  position: relative;
  transform-origin: 0% 50%;
  transition: color 300ms ease-in-out, left 500ms ease-in-out;
  left: 0;

  &:hover,
  &:focus {
    background-color: #e0e0e0;
  }

  &::before {
    content: ' ';
    display: block;
    background-color: currentColor;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0px;
    width: 4px;
    transition: transform 300ms ease-in-out;
    transition-delay: 0s;
    transform: scaleY(0);
  }

  &.is-active {
    color: hsl(12, 78%, 35%);
    background-color: transparent;
    left: -${space}px;

    &::before {
      transform: scaleY(1);
      transition-delay: 500ms;
    }

    &:hover {
      cursor: default;
    }
  }
`;

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
        <Title isActive={isActive}>
          <button onClick={() => setIsActive(!isActive)}>
            {title} <ChevronIcon />
          </button>
        </Title>
      )}
      {nodes.map(({ frontmatter: { title }, fields: { slug } }) => (
        <Item isActive={isActive} key={slug}>
          <LessonLink
            activeClassName="is-active"
            to={slug}
            onFocus={isActive ? undefined : () => setIsActive(true)}
          >
            {title}
          </LessonLink>
        </Item>
      ))}
    </>
  );
};

const Nav = styled.nav`
  padding: ${space}px 0;
  background-color: #eeeeee;
  overflow-y: auto;

  @media screen and (min-width: ${mobileWidth}) {
    position: fixed;
    top: ${appbarHeight};
    bottom: 0;
    right: 0;
    width: ${tocWidth};
  }
`;

const Inner = styled.div`
  margin: 0px auto;
  padding-bottom: 44px;
`;

const Toc = ({ pathname, sections }) => {
  return (
    <Nav>
      <Inner>
        <ol>
          {sections.map(({ nodes, title }) => (
            <TableOfContentsSection
              nodes={nodes}
              title={title}
              pathname={pathname}
              key={title}
            />
          ))}
        </ol>
      </Inner>
    </Nav>
  );
};

export default Toc;
