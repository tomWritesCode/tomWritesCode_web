require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `tomWritesCode`,
    author: {
      name: `Tom Whitaker`,
      summary: `New blog with MDX posts`,
    },
    description: `Blog using MDX posts`,
    social: {
      twitter: `@tomwritescode`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
  {
    resolve: `gatsby-plugin-umami`,
    options: {
      websiteId: process.env.UMAMI_WEBSITE_ID,
      srcUrl: process.env.UMAMI_SRC_URL,
      includeInDevelopment: false,
      autoTrack: true,
      respectDoNotTrack: true
    },
  },
    {
    resolve:`gatsby-source-cloudinary`,
    options: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
    resourceType: `image`,
    prefix: 'Photography/'
    }
},
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `Blog Posts`,
        remote: `https://github.com/tomWritesCode/MDX_Blog_Posts`,
        branch: `main`,
        local: `${__dirname}/src/posts`,
        patterns: [`*`],
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
