import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Appbar from './appbar';
import MainContainer from './main-container';
import Protected from './protected';
import Reset from './reset';
import { mobileWidth, tocWidth } from './styles';
import Toc from './toc';

const Container = styled(MainContainer)`
  @media screen and (min-width: ${mobileWidth}) {
    display: grid;
    grid-template-columns: 1fr ${tocWidth};
  }
`;

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
      <Protected>
        <Container>
          {children}
          <Toc
            sections={pageContext.lessonGroups}
            pathname={location.pathname}
          />
        </Container>
      </Protected>
    </>
  ) : (
    <>{children}</>
  );
};

export default LessonLayout;
