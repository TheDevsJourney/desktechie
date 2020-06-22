import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Laptop = () => {
  const laptopImg = useStaticQuery(graphql`
    {
      imageSharp(fixed: { originalName: { eq: "laptop.jpg" } }) {
        fixed(width: 300, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)
  return (
    <Image
      fixed={laptopImg.imageSharp.fixed}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    />
  )
}

export default Laptop
