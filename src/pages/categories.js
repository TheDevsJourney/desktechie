import React from "react"
import Categories from "../components/Categories"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"

const categories = () => {
  return (
    <Layout>
      <PageHeader page={"Categories"} category={false} subcategory={false} />
      <div className="container">
        <h2>Welcome to Categories!</h2>
        <Categories />
      </div>
    </Layout>
  )
}

export default categories
