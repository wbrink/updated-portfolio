import React from "react";
import "./style.css";

function Portfolio({margin, imageURL, githubURL, deployedURL}) {
  return (
    <div className="container" style={{marginLeft: `${margin}px`}}>
      <h1 className="title">Portfolio</h1>
    </div>
  )
}

export default Portfolio;