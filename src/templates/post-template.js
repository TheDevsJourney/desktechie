import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Sidebar from "../components/Sidebar"
import PageHeader from "../components/PageHeader"
import { Link } from "gatsby"
// import "../style.css"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <PageHeader page={false} />
      <div className="container">
        {/* Breadcrumbs */}
        <p style={{ marginTop: "1.5rem" }}>
          <span>
            <Link style={{ color: "black" }} to={`blog/`}>
              blog
            </Link>
          </span>{" "}
          {"> "}
          <span>{mdx.frontmatter.slug}</span>
        </p>
      </div>
      <section className="container blog-grid" style={{ marginTop: "15px" }}>
        <div className="blog">
          <h1 style={{ marginBottom: ".8rem" }}>{mdx.frontmatter.title}</h1>
          {/* <p>{mdx.frontmatter.categories}</p> */}
          <p style={{ marginBottom: "1.2rem" }}>{mdx.frontmatter.date}</p>
          <MDXProvider components={shortcodes}>
            <div className="post">
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </div>
          </MDXProvider>
        </div>
        <Sidebar />
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        slug
        title
        categories
        date(formatString: "M DD YYYY")
      }
    }
  }
`
