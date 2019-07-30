import { MDXProvider } from '@mdx-js/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Appbar from './appbar';
import CodeRenderer from './code-renderer';
import InlineCode from './inline-code';
import MainContainer from './main-container';
import Reset from './reset';
import Toc from './toc';
import Protected from './protected';

const mdxComponents = {
  code: CodeRenderer,
  inlineCode: InlineCode,
};

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
    <MDXProvider components={mdxComponents}>
      <Reset />
      <Appbar>{data.site.siteMetadata.title}</Appbar>
      <Protected>
        <MainContainer>
          {children}
          <Toc
            sections={pageContext.lessonGroups}
            pathname={location.pathname}
          />
        </MainContainer>
      </Protected>
    </MDXProvider>
  ) : (
    <>{children}</>
  );
};

export default LessonLayout;
