import React from "react"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="newsletter">
        <h3>Newsletter</h3>
        <hr />
        <p>
          Like free tech? Join our newsletter to find out more about our monthly
          giveaway.{" "}
          <span>
            PS: We <mark>wont</mark> spam you.
          </span>
        </p>
        <form action="">
          <input type="text" placeholder="Email Here..." />
          <div>Subscribe</div>
        </form>
      </div>
      <div
        style={{
          height: "200px",
          width: "260px",
          // backgroundColor: "rgb(34,178,123)",
          backgroundColor: "white",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          border: "solid 1px lightgray",
        }}
      >
        <p>Ad</p>
      </div>
    </aside>
  )
}

export default Sidebar
