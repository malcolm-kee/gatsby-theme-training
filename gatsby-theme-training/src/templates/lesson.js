import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Button from '../components/training/button';
import ChevronIcon from '../components/training/chevron-icon';
import LessonContainer from '../components/training/lesson-container';
import LessonToc from '../components/training/lesson-toc';
import Seo from '../components/training/seo';
import Toolbar from '../components/training/toolbar';

const InstructionTemplate = ({
  data: { mdx },
  pageContext: { next },
  location,
}) => {
  return (
    <>
      <Seo
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
        keywords={mdx.frontmatter.keywords}
        url={location.pathname}
      />
      <LessonContainer>
        <div>
          <h1>{mdx.frontmatter.title}</h1>
          <LessonToc items={mdx.tableOfContents.items} />
          <main>
            <article className="instruction-article article-content">
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </article>
          </main>
          {next && (
            <Toolbar>
              <Button
                component={Link}
                to={next.fields.slug}
                variant="bubble"
                size="large"
              >
                Next Lesson {rightArrow}
              </Button>
            </Toolbar>
          )}
        </div>
      </LessonContainer>
    </>
  );
};
const rightArrow = (
  <ChevronIcon
    size={15}
    styles={{
      transform: `rotate(-90deg)`,
      marginLeft: 8,
    }}
  />
);

export default InstructionTemplate;

export const pageQuery = graphql`
  query LessonById($id: String!) {
    mdx(id: { eq: $id }) {
      id
      fields {
        slug
      }
      frontmatter {
        title
        description
        section
        keywords
      }
      body
      tableOfContents(maxDepth: 2)
    }
  }
`;
