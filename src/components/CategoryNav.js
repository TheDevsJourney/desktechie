import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
const _ = require("lodash")

const CategoryNav = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          frontmatter {
            categories
          }
        }
      }
    }
  `)

  // store all categories
  let categories = []

  data.allMdx.nodes.map(node =>
    node.frontmatter.categories.map(
      category => (categories = categories.concat(category))
    )
  )
  categories = _.uniq(categories)

  return (
    <ul className="CategoryNav">
      {categories.map(category => (
        <li style={{ listStyleType: "none", padding: "8px 0" }} key={category}>
          <Link
            style={{ textDecoration: "none", color: "gray" }}
            to={`/categories/${category}/`}
          >
            {category}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default CategoryNav
