import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Sidebar from "../components/Sidebar"
import PageHeader from "../components/PageHeader"
import { Link } from "gatsby"
import Image from "gatsby-image"
// import "../style.css"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <PageHeader page={mdx.frontmatter.title} />
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
      <section className="container blog-grid" style={{ marginTop: "2rem" }}>
        <div className="blog">
          {/* <div
            style={{
              height: "350px",
              width: "auto",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(25,25,25, .7)",
                zIndex: "1",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h1 style={{ marginBottom: ".8rem" }}>{mdx.frontmatter.title}</h1>
              <p style={{ marginBottom: "1.2rem" }}>{mdx.frontmatter.date}</p>
            </div>
            <Image
              fixed={mdx.frontmatter.featuredImage.childImageSharp.fluid}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                margin: "0",
                padding: "0",
              }}
            />
          </div> */}
          <div className="innerPostPadding">
            <h1 style={{ marginBottom: ".8rem" }}>{mdx.frontmatter.title}</h1>
            {/* <p>{mdx.frontmatter.categories}</p> */}
            <p style={{ marginBottom: "1.2rem" }}>{mdx.frontmatter.date}</p>
            <MDXProvider components={shortcodes}>
              <div className="post">
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </div>
            </MDXProvider>
          </div>
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
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
