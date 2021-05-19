const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
const myCustomQueries = {
    xxs: '(max-width: 500px)',
    xs: '(max-width: 750px)',
    sm: '(max-width: 900px)',
    md: '(max-width: 1200px)',
    l: '(max-width: 1600px)',
};


module.exports = {
  siteMetadata: {
    title: "abstract_climbing",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: process.env.SHOP_NAME,
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    `gatsby-plugin-layout`,
    "gatsby-transformer-sharp",
    {
    resolve: 'gatsby-plugin-root-import',
    options: {
      '~': path.join(__dirname, 'src/'),
    }
    },
    {
    resolve: "gatsby-plugin-breakpoints",
    options: {
      queries: myCustomQueries,
    }
  },
  {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
        timeout: 3500,
      },
    },
    {
   resolve: `gatsby-source-datocms`,
   options: {
     apiToken: process.env.DATO_ENDPOINT,
     previewMode: false,
     disableLiveReload: false,
   },
 },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
   resolve: "gatsby-plugin-web-font-loader",
   options: {
     typekit: {
       id: process.env.TYPEKIT_ID,
     },
   },
 },
  ],
};
