import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Appbar from './appbar';
import MainContainer from './main-container';
import Reset from './reset';
import Toc from './toc';

const LessonLayout = ({ children, pageContext, location }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return pageContext && pageContext.isTrainingLesson ? (
    <>
      <Reset />
      <Appbar>{data.site.siteMetadata.title}</Appbar>
      <MainContainer>
        {children}
        <Toc sections={pageContext.lessonGroups} pathname={location.pathname} />
      </MainContainer>
    </>
  ) : (
    children
  );
};

export default LessonLayout;
