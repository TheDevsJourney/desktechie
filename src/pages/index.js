import React from "react"
import Layout from "../components/layout"
import Categories from "../components/Categories"
import landing from "../images/landing.svg"
import sunTornado from "../images/suntornado.svg"

export default function Home() {
  return (
    <Layout>
      <div
        style={{
          height: "auto",
          width: "100%",
          backgroundImage: `linear-gradient(to bottom, rgba(39,146,206, .4), rgba(39,246,156, .52)), url(${sunTornado})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <header
            style={{
              height: "500px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "50%" }}>
              <h1
                style={{
                  fontSize: "3.5rem",
                  color: "rgb(48,35,34)",
                  fontWeight: "200",
                }}
              >
                Reviewing Tech We Love
              </h1>
              <p
                style={{
                  margin: "15px 0",
                  color: "rgb(48,45,87)",
                  fontSize: "1.2rem",
                }}
              >
                While Helping You Make Better Purchases
              </p>
              <button
                style={{
                  outline: "none",
                  border: "none",
                  padding: "15px 25px",
                  border: "solid 2px rgb(48,95,134)",
                  borderRadius: "5px",
                  backgroundColor: "rgba(255,255,255,0)",
                  color: "white",
                }}
              >
                Read Reviews
              </button>
            </div>
            <div style={{ width: "50%" }}>
              {/* <img
                src={landing}
                alt="landing"
                height="auto"
                width="80%"
                draggable="false"
              /> */}
            </div>
          </header>
        </div>
      </div>
      <div className="container" style={{ marginTop: "5rem" }}>
        <Categories />
      </div>
    </Layout>
  )
}
