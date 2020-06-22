const path = require("path")
const _ = require("lodash")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const categoriesTemplate = path.resolve(
    `src/templates/categories-template.js`
  )

  const subCategoriesTemplate = path.resolve(
    `src/templates/subCategories-template.js`
  )

  const result = await graphql(`
    query GetPostSlugs {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
              categories
              subCategories
            }
            id
          }
        }
      }
    }
  `)

  const posts = result.data.allMdx.edges

  // Create single blog post pages
  posts.forEach(post => {
    createPage({
      path: `/blog/${post.node.frontmatter.slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        id: post.node.id,
      },
    })
  })

  // store all categories
  let categories = []

  _.each(posts, edge => {
    if (_.get(edge, "node.frontmatter.categories")) {
      categories = categories.concat(edge.node.frontmatter.categories)
    }
  })

  let categoryCount = {}
  categories.forEach(category => {
    categoryCount[category] = (categoryCount[category] || 0) + 1
  })

  categories = _.uniq(categories)

  categories.forEach(category => {
    // Create single page for categories
    createPage({
      path: `/categories/${category}`,
      component: categoriesTemplate,
      context: {
        category,
      },
    })
  })

  // Sub categories
  // let subCategories = []

  categories.forEach(category => {
    posts.forEach(post => {
      post.node.frontmatter.subCategories.forEach(subCategory => {
        createPage({
          path: `/categories/${category}/${subCategory}`,
          component: subCategoriesTemplate,
          context: {
            category,
            subCategory,
          },
        })
      })
    })
  })

  // subCategories = _.uniq(subCategories)
}
