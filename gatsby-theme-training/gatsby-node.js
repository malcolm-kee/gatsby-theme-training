const path = require('path');

const LessonTemplate = require.resolve('./src/templates/lesson');

function createNodeFields({ node, actions, fileNode }) {
  const { createNodeField } = actions;
  const frontMatterPath = node.frontmatter && node.frontmatter.path;

  createNodeField({
    node,
    name: 'isTrainingLesson',
    value: true,
  });

  if (frontMatterPath) {
    createNodeField({
      node,
      name: 'slug',
      value: frontMatterPath,
    });
  } else {
    const { name } = path.parse(fileNode.relativePath);
    createNodeField({
      node,
      name: 'slug',
      value: `/${name}`,
    });
  }
}

function groupInstruction(edges) {
  const sectionsByKey = {};

  const nodes = edges.map(edge => edge.node);

  nodes.forEach(node => {
    if (sectionsByKey[node.frontmatter.section]) {
      sectionsByKey[node.frontmatter.section].push(node);
    } else {
      sectionsByKey[node.frontmatter.section] = [node];
    }
  });

  return Object.keys(sectionsByKey).map(title => ({
    title,
    nodes: sectionsByKey[title],
  }));
}

exports.onCreateNode = async ({ node, getNode, actions }) => {
  if (node.internal.type === 'Mdx') {
    const fileNode = getNode(node.parent);
    if (fileNode.sourceInstanceName === 'lessons') {
      await createNodeFields({ node, actions, fileNode });
    }
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx(
        sort: { fields: [fileAbsolutePath] }
        filter: { fields: { isTrainingLesson: { eq: true } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              section
              title
            }
            fields {
              slug
            }
          }
          next {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic(result.errors);
  }

  const { allMdx } = result.data;
  const lessons = allMdx.edges;
  const lessonGroups = groupInstruction(lessons);

  lessons.forEach(({ node: lesson, next }) => {
    createPage({
      path: lesson.fields.slug,
      component: LessonTemplate,
      context: {
        id: lesson.id, // for template page query
        next, // for showing link to next lesson
        isTrainingLesson: true, // to check to render layout
        lessonGroups, // for used in TOC
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  // switching buble to '@philpl/buble' to reduce bundle size
  // but does not support ESNext regex. See https://github.com/FormidableLabs/react-live#what-bundle-size-can-i-expect
  actions.setWebpackConfig({
    resolve: {
      alias: {
        buble: '@philpl/buble',
      },
    },
  });
};
