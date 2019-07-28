import cx from 'classnames';
import React from 'react';
import { toolbar } from './toolbar.module.scss';

const Toolbar = ({ className, ...props }) => <div className={cx(className, toolbar)} {...props} />;

export default Toolbar;
