import cx from 'classnames';
import React from 'react';
import { content } from './lesson-content.module.scss';

const LessonContent = ({ className, ...props }) => (
  <div className={cx(className, content)} {...props} />
);

export default LessonContent;
