import React from "react"
import BlogCard from "../components/BlogCard"
import BlogPreview from "../components/BlogPreview"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"

const ComponentName = ({ data }) => {
  return (
    <Layout>
      <PageHeader page={"Blog"} category={false} subcategory={false} />
      <BlogPreview>
        {data.allMdx.nodes.map(post => (
          <BlogCard
            title={post.frontmatter.title}
            image={post.frontmatter.featuredImage.childImageSharp.fixed}
            slug={post.frontmatter.slug}
            categories={post.frontmatter.categories}
            showCategory={true}
            subCategories={post.frontmatter.subCategories}
          />
        ))}
      </BlogPreview>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          title
          slug
          categories
          subCategories
          featuredImage {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
              id
            }
          }
        }
        body
      }
    }
  }
`

export default ComponentName
