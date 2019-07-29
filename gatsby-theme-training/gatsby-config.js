module.exports = ({ lessonPath = 'lessons' }) => {
  return {
    siteMetadata: {
      title: `Training Title Placeholder`,
      author: `Author Placeholder`,
      siteUrl: `http://siteurlplaceholder.com`,
      description: `Training description placeholder`,
    },
    plugins: [
      `gatsby-plugin-sass`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: lessonPath,
          name: 'lessons',
        },
      },
      `gatsby-plugin-emotion`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          gatsbyRemarkPlugins: [
            `gatsby-remark-copy-linked-files`,
            `gatsby-remark-external-links`,
            {
              resolve: `gatsby-remark-autolink-headers`,
              options: {
                className: `header-link-icon`,
              },
            },
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 800,
                withWebp: true,
              },
            },
          ],
        },
      },
      `gatsby-plugin-catch-links`,
    ],
  };
};
