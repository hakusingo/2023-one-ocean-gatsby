/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `沖縄貸切自然体験アドベンチャーツアー｜カヤック・トレッキング・青の洞窟でアドベンチャー体験｜oneocean（ワンオーシャン）`,
    description: `沖縄貸切自然体験アドベンチャーツアーのワンオーシャン、完全貸切で専門ガイド付き。沖縄本島北部でマングローブカヤック、リバートレッキング、青の洞窟をアドベンチャー体験！貸切だから自分のペースで冒険できる！お子様からご年配まで参加可能なツアーあり。子連れ家族旅行にもおすすめ`,
    author: `@hakusingo`,
    siteUrl: `https://one-ocean-toku.com/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-plugin-postcss',
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
