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
    grid-template-columns: minmax(0, 1fr) ${tocWidth};
  }
`;
// grid column based on https://css-tricks.com/preventing-a-grid-blowout/

const LessonLayout = ({ children, pageContext, location }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          themeColor
        }
      }
    }
  `);

  const siteMetadata = data.site.siteMetadata;

  return pageContext && pageContext.isTrainingLesson ? (
    <>
      <Reset />
      <Appbar backgroundColor={siteMetadata.themeColor}>
        {siteMetadata.title}
      </Appbar>
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
