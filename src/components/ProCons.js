import React from "react"

const ProCons = ({ pros, cons }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "0 auto",
        width: "100%",
        height: "400px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <h3>Pros</h3>
        <hr
          style={{
            borderBottom: "solid 1px gray",
            width: "45px",
          }}
        />
        {pros.map(pro => (
          <p>{pro}</p>
        ))}
      </div>
      <div
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>Cons</h3>
        <hr
          style={{
            borderBottom: "solid 1px gray",
            width: "45px",
          }}
        />
        {cons.map(con => (
          <p>{con}</p>
        ))}
      </div>
    </div>
  )
}

export default ProCons
