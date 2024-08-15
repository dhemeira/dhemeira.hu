/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `dhemeira`,
    description: `Personal website of Dhemeira (Lakics Péter). I am a CS student & front-end developer from Hungary.`,
    author: `Lakics Péter`,
    siteUrl: `https://dhemeira.hu/`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
        name: `dhemeira`,
        short_name: `dhemeira`,
        start_url: `/`,
        background_color: `#0d0a29`,
        theme_color: `#0d0a29`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
  flags: {
    DEV_SSR: true,
  },
  trailingSlash: 'never',
};
