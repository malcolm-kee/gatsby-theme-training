module.exports = {
  siteMetadata: {
    title: `Introduction to React JS`,
    author: `Malcolm Kee`,
    siteUrl: `http://siteurlplaceholder.com`,
    description: `Training description placeholder`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-training`,
      options: {
        disableAuth: true,
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        exclude: /(node_modules|.cache|public|gatsby-theme-training)/,
      },
    },
  ],
};
