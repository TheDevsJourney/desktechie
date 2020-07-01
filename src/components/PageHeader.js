import React from "react"
import sunTornado from "../images/suntornado.svg"

const PageHeader = ({ page, category, subcategory }) => {
  return (
    <div
      style={{
        height: "340px",
        width: "100%",
        marginBottom: "3.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          // backgroundImage: `linear-gradient(to bottom, rgba(39,146,206, .4), rgba(39,246,156, .52)), url(${sunTornado})`,
          backgroundColor: "rgb(15,200,200)",
          backgroundSize: "cover",
          position: "absolute",
        }}
      ></div>
      <h2
        style={{
          fontWeight: "200",
          fontSize: "3.5rem",
          overflow: "hidden",
          color: "rgba(255,255,255,.7)",
          position: "absolute",
        }}
      >
        {page !== false && page}
      </h2>
    </div>
  )
}

export default PageHeader
