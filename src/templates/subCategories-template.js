import React from "react"
import { graphql, Link } from "gatsby"
import BlogPreview from "../components/BlogPreview"
import BlogCard from "../components/BlogCard"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"

const subCategoriesTemplate = ({ pageContext, data }, props) => {
  const { subCategory, category } = pageContext
  return (
    <Layout>
      <PageHeader
        page={subCategory}
        category={category}
        subcategory={subCategory}
      />
      <div className="container">
        {/* Breadcrumbs */}
        <p style={{ marginTop: "1.5rem" }}>
          <span>
            <Link style={{ color: "black" }} to={`categories/`}>
              categories
            </Link>
          </span>{" "}
          {"> "}
          <span>
            <Link style={{ color: "black" }} to={`categories/${category}`}>
              {category}
            </Link>
          </span>{" "}
          {"> "}
          <span>{subCategory}</span>
        </p>
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

export default subCategoriesTemplate

export const pageQuery = graphql`
  query allSubCategories($category: String!, $subCategory: String!) {
    allMdx(
      filter: {
        frontmatter: {
          categories: { eq: $category }
          subCategories: { eq: $subCategory }
        }
      }
    ) {
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
