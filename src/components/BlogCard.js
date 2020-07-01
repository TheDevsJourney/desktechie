import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const BlogCard = ({
  title,
  image,
  slug,
  categories,
  subCategories,
  showCategory,
}) => {
  let categoryLink
  categories.map(category => (categoryLink = category))
  return (
    <div className="blog-card">
      <div
        style={{
          height: "250px",
          position: "relative",
        }}
      >
        <Link to={`/blog/${slug}`}>
          <Image
            fixed={image}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          />
        </Link>
        {/* <div className="card-top"></div> */}
        {categories !== "empty" &&
          showCategory !== false &&
          categories.map(category => (
            <Link
              style={{ color: "rgb(240,240,240)", textDecoration: "none" }}
              to={`/categories/${category}/`}
            >
              <p className={`tag tag-${category}`}>{category}</p>
            </Link>
          ))}
      </div>

      <div
        className="card-bottom"
        style={{
          height: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "15px 0",
        }}
      >
        <h2 style={{ fontWeight: "200" }}>{title}</h2>

        <button
          style={{
            display: "inline",
            width: "auto",
            margin: "8px auto",
            padding: "8px 18px",
            backgroundColor: "rgb(46,156,231)",
            border: "none",
            outline: "none",
          }}
        >
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={`/blog/${slug}`}
          >
            Read More
          </Link>
        </button>

        {subCategories !== "empty" && (
          <ul style={{ listStyleType: "none", display: "flex" }}>
            {subCategories.map(subCategory => (
              <li
                style={{
                  marginLeft: "8px",
                  marginTop: "10px",
                  color: "gray",
                  fontSize: "14px",
                  fontStyle: "italic",
                }}
              >
                <span>#</span>
                <span>
                  <Link
                    style={{ color: "gray", fontStyle: "italic" }}
                    to={`/categories/${categoryLink}/${subCategory}`}
                  >
                    {subCategory}
                  </Link>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default BlogCard
