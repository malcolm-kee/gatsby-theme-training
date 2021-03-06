import styled from '@emotion/styled';
import React from 'react';
import { primaryColor, primaryDark } from './styles';

const StyledBtn = styled.button`
  box-sizing: border-box;
  font-family: $font;
  position: relative;
  padding: 8px 16px;
  cursor: pointer;
  text-transform: capitalize;
  text-decoration: none;
  min-height: 36px;
  min-width: ${({ minWidth }) =>
    minWidth === 'width'
      ? 100
      : minWidth === 'wider'
      ? 200
      : minWidth === 'widest'
      ? 300
      : 88}px;
  display: inline-flex;
  line-height: 1.2;
  justify-content: center;
  align-items: center;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-radius: 5px;
  background-color: white;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:focus {
    outline: none;
    filter: brightness(120%);
    border-color: hsl(12, 78%, 55%);
  }
  &:hover {
    background-color: #eeeeee;
  }
  ${({ variant }) =>
    variant === 'primary'
      ? `border-color: rgba(0,0,0,0);
      color: #fff;
      background-color: ${primaryColor};
      box-shadow: 0 1px 5px 0 rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
      border-width: 2px;
      border-style: solid;
    &:focus {
      border-color: #fff;
    }
    &:hover {
      background-color: ${primaryDark};
    }`
      : variant === 'bubble'
      ? `
        background-color: #306b7b;
        color: #fff;
        z-index: 1;
        overflow: hidden;
        transition: color 0.3s ease-in-out;
        border: 2px solid transparent;
        &::before {
          content: '';
          z-index: -1;
          position: absolute;
          top: 100%;
          right: 100%;
          width: 1em;
          height: 1em;
          border-radius: 50%;
          background-color: #61dafb;
          transform-origin: center;
          transform: translate(50%, -50%) scale(0);
          transition: transform 0.35s ease-in-out;
        }
        &:hover {
          background-color: #306b7b;
          color: #161616;
          &::before {
            transform: translate(50%, -50%) scale(20);
          }
        }
        &:focus {
          border-color: #61dafb;
        }
      `
      : ''}
  ${({ size }) =>
    size === 'small'
      ? `font-size: 0.8rem;
          padding: 4px 8px;
          min-height: 25px;
          min-width: unset;
          line-height: 1;`
      : size === 'large'
      ? `min-height: 56px;
          min-width: 180px;
          font-size: 1.3rem;`
      : ''}
`;

/**
 *
 * @param {Object} props
 * @param {*} [props.component]
 * @param {'primary' | 'bubble'} [props.variant]
 * @param {'small' | 'large'} [props.size]
 * @param {'wide' | 'wider' | 'widest'} [props.minWidth]
 */
const Button = ({
  component = 'button',
  children,
  type = component === 'button' ? 'button' : undefined,
  ...restProps
}) => {
  const Component = StyledBtn.withComponent(component);
  return (
    <Component type={type} {...restProps}>
      {children}
    </Component>
  );
};

export default Button;
