import React from "react";

import img from "../assets/img/responsive.png";

import Navbar from "../containers/Navbar";



function Index() {
  return (
    <div id="wapper">
      <Navbar />
      <div
        id="content-wrapper"
        className="d-flex flex-column align-items-center justify-content-center inicio"
      >
        <div
          className="d-flex flex-column"
          style={{
            marginLeft: "50%",
            color: "var(--bs-gray-300)",
            marginTop: "10%",
          }}
        >
          <h1 style={{ fontSize: "300%" }}>Mobile Helper</h1>
          <p>The most popular web for mobile and client management</p>
          <img className="img-fluid" src={img} />
        </div>
      </div>
    </div>
  )
}
export default Index;
