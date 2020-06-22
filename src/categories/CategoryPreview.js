import React from "react"
import { Link } from "gatsby"

const CategoryPreview = props => {
  return (
    <div>
      <p>{props.category}</p>
      <div style={{ position: "relative", height: "250px", width: "300px" }}>
        <Link to={`/categories/${props.category}`}>{props.img}</Link>
      </div>
      <button>
        <Link to={`/categories/${props.category}`}>See All</Link>
      </button>
    </div>
  )
}

export default CategoryPreview
