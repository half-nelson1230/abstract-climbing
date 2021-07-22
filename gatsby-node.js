const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
      allDatoCmsDisclaimer {
        edges {
          node {
            url
          }
        }
      }
    }
  `).then(result => {
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
      createPage({
        path: `/shop/${node.handle}/`,
        component: path.resolve(`./src/templates/product.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          handle: node.handle,
        },
      })
    })
    result.data.allDatoCmsDisclaimer.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.url}/`,
        component: path.resolve(`./src/templates/tos.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          url: node.url,
        },
      })
    })

  })
}
