import React from "react"
import { Link } from "gatsby"
import CategoryNav from "../components/CategoryNav"

const Navbar = () => {
  return (
    <nav
      style={{
        width: "100%",
        padding: "25px 0",
        position: "absolute",
        zIndex: "2000",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p className="logo">DeskTechie</p>
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
          }}
        >
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>Home</span>
            </Link>
          </li>
          <li style={{ marginLeft: "20px" }}>
            <Link to="/blog" style={{ textDecoration: "none" }}>
              <span>Blog</span>
            </Link>
          </li>
          <li style={{ marginLeft: "20px" }}>
            <Link to="/categories" style={{ textDecoration: "none" }}>
              <span className="categoriesNav">Categories</span>
              <CategoryNav />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
