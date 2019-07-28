module.exports = ({ lessonPath = 'lessons' }) => {
  return {
    siteMetadata: {
      title: `Training Title Placeholder`,
      author: `Author Placeholder`,
      siteUrl: `http://siteurlplaceholder.com`,
      description: `Training description placeholder`
    },
    plugins: [
      `gatsby-plugin-sass`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: lessonPath,
          name: 'lessons'
        }
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-mdx`
    ]
  };
};
