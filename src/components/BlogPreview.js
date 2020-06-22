import React from "react"

const BlogPreview = ({ children }) => {
  return (
    <section
      className="container blog_page--grid"
      style={{
        display: "grid",
        gridGap: "2rem",
        padding: "1rem",
        justifyContent: "space-between",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      }}
    >
      {children}
    </section>
  )
}

export default BlogPreview
