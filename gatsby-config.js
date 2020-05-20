module.exports = {
  siteMetadata: {
    title: `Forwardslash - Modern App Development`,
    description: `Progressive application development solutions.`,
    author: `@jv`,
    siteUrl: `https://forwardslash-development.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Forwardslash Development`,
        short_name: `forwardslash`,
        start_url: `/`,
        background_color: `#000066`,
        theme_color: `#000066`,
        display: `minimal-ui`,
        icon: `src/assets/img/42xlogo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "forwardslash-development.io",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
  ],
}
