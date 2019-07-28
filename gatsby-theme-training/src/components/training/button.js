import cx from 'classnames';
import React from 'react';
import { btn, bubble, large, primary, small, wide, wider, widest } from './button.module.scss';

/**
 *
 * @param {Object} props
 * @param {*} [props.component]
 * @param {'primary' | 'bubble'} [props.variant]
 * @param {'small' | 'large'} [props.size]
 * @param {'wide' | 'wider' | 'widest'} [props.minWidth]
 */
const Button = ({
  component: Component = 'button',
  variant,
  size,
  className,
  children,
  type = Component === 'button' ? 'button' : undefined,
  minWidth,
  ...restProps
}) => (
  <Component
    type={type}
    className={cx(
      btn,
      variant && variant === 'primary' ? primary : variant === 'bubble' && bubble,
      size && size === 'small' ? small : size === 'large' && large,
      minWidth && minWidth === 'wide'
        ? wide
        : minWidth === 'wider'
        ? wider
        : minWidth === 'widest' && widest,
      className
    )}
    {...restProps}
  >
    {children}
  </Component>
);

export default Button;
