module.exports = ({ lessonPath = 'lessons' }) => {
  return {
    siteMetadata: {
      title: `Training Title Placeholder`,
      author: `Author Placeholder`,
      siteUrl: `http://siteurlplaceholder.com`,
      description: `Training description placeholder`,
      themeColor: '#e44d26',
    },
    plugins: [
      `gatsby-plugin-sharp`,
      'gatsby-remark-images',
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
              },
            },
          ],
        },
      },
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-netlify`,
    ],
  };
};
