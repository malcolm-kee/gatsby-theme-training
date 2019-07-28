import React from 'react';
import { main } from './layout.module.scss';
import Toc from './toc';
import Appbar from './appbar';

const LessonLayout = ({ children, pageContext, location }) => {
  return pageContext && pageContext.isTrainingLesson ? (
    <>
      <Appbar />
      <div className={main}>
        {children}
        <Toc sections={pageContext.lessonGroups} pathname={location.pathname} />
      </div>
    </>
  ) : (
    children
  );
};

export default LessonLayout;
