import React from "react"
import BlogPreview from "../components/BlogPreview"
import BlogCard from "../components/BlogCard"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
import Image from "gatsby-image"
const _ = require("lodash")

const categoriesPage = ({ pageContext, data }) => {
  const { category } = pageContext

  let subCategories = []

  data.allMdx.nodes.map(node =>
    node.frontmatter.subCategories.map(
      subCategory => (subCategories = subCategories.concat(subCategory))
    )
  )

  subCategories = _.uniq(subCategories)

  return (
    <Layout>
      <PageHeader page={category} category={category} subcategory={false} />
      <div className="categories container">
        {/* Breadcrumbs */}
        <p style={{ marginTop: "1.5rem" }}>
          <span>
            <Link style={{ color: "black" }} to={`categories/`}>
              categories
            </Link>
          </span>{" "}
          {"> "}
          {category}
        </p>
        {/* <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>

          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "150px",
                height: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "grey",
                color: "white",
                cursor: "pointer",
              }}
            >
              Filter By...
            </div>
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                boxShadow: "5px 5px 25px rgba(45,45,45,0.3)",
                position: "absolute",
                top: "35px",
                width: "150px",
              }}
            >
              {subCategories.map(subCategory => (
                <li style={{ margin: "15px 0" }}>
                  <Link
                    to={`/categories/${category}/${subCategory}`}
                    style={{
                      textDecoration: "none",
                      color: "blue",
                    }}
                  >
                    {subCategory}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>

      <BlogPreview>
        {data.allMdx.nodes.map(node => (
          <BlogCard
            title={node.frontmatter.title}
            image={node.frontmatter.featuredImage.childImageSharp.fixed}
            slug={node.frontmatter.slug}
            categories={node.frontmatter.categories}
            showCategory={false}
            subCategories={node.frontmatter.subCategories}
          />
        ))}
      </BlogPreview>
    </Layout>
  )
}

export default categoriesPage

export const pageQuery = graphql`
  query allCategories($category: String!) {
    allMdx(filter: { frontmatter: { categories: { eq: $category } } }) {
      nodes {
        frontmatter {
          title
          slug
          subCategories
          categories
          featuredImage {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
