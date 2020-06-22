import React from "react"
import KeyboardImg from "../categories/Keyboard"
import LaptopImg from "../categories/Laptop"
import CategoryPreview from "../categories/CategoryPreview"

const Categories = () => {
  return (
    <>
      {/* Keyboards */}
      <CategoryPreview category="keyboards" img={<KeyboardImg />} />

      {/* Laptops */}
      <CategoryPreview category="laptops" img={<LaptopImg />} />
    </>
  )
}

export default Categories
