import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Keyboard = () => {
  const keyboardImg = useStaticQuery(graphql`
    {
      imageSharp(fixed: { originalName: { eq: "keyboard.jpg" } }) {
        fixed(width: 250, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)
  return (
    <Image
      fixed={keyboardImg.imageSharp.fixed}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    />
  )
}

export default Keyboard
