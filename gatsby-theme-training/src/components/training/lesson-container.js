import cx from 'classnames';
import React from 'react';
import { ctn } from './lesson-container.module.scss';

const LessonContainer = ({ className, ...props }) => (
  <div className={cx(className, ctn)} {...props} />
);

export default LessonContainer;
