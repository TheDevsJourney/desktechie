import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../style.css"

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default layout
