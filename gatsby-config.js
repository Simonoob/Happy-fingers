module.exports = {
  siteMetadata: {
    siteTitle: `Happy fingers`,
    defaultTitle: `Happy fingers`,
    siteTitleShort: `Happy fingers`,
    siteDescription: `Pulley injuries prevention for climbers`,
    siteUrl: `https://happy-fingers.netlify.app/`,
    siteAuthor: `@SimoneFiorentini`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#3D3D4D`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Happy fingers`,
        short_name: `Happy fingers`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
