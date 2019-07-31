import styled from '@emotion/styled';
import { primaryColor, primaryLight } from './styles';
import { hasClass } from '../../lib/cx';

const StyledLink = styled.a`
  color: inherit;
  position: relative;
  text-decoration: none;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  transition-property: background-color, outline;
  outline: 1px solid rgba(239, 239, 239, 0);

  &::before {
    content: '';
    position: absolute;
    left: 0%;
    bottom: -1px;
    width: 100%;
    height: 1px;
    background-color: ${primaryLight};
    transition: height 300ms ease-in-out;
  }

  &:hover {
    background-color: rgba(239, 239, 239, 1);
    outline: 3px solid rgba(239, 239, 239, 1);
    &::before {
      background-color: ${primaryColor};
      height: 2px;
    }
  }
`;

const HeaderLink = styled.a`
  float: left;
  padding-left: 4px;
  margin-left: -24px;
  color: #aaaaaa;
  transition: color 300ms ease-in-out;

  &:active,
  &:focus,
  &:hover {
    color: ${primaryColor};
  }

  svg {
    color: inherit;
    path {
      fill: currentColor;
    }
  }
`;

const Link = props =>
  hasClass('gatsby-resp-image-link', props.className) ? (
    <a {...props} />
  ) : hasClass('header-link-icon', props.className) ? (
    <HeaderLink {...props} />
  ) : (
    <StyledLink {...props} />
  );

export default Link;
