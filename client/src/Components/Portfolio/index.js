import React from "react";
import "./style.css";

function Portfolio({margin}) {
  return (
    <div className="container-2" style={{marginLeft: `${margin}px`}}>
      <h1 className="title">Portfolio</h1>

      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
        <div className="project">
          <div className="project-image">
            <img src="/images/social-calendar-big.PNG" alt=""/>
          </div>
          <div className="project-info">
            <a href="">View Live</a>
            <a href="">View Source</a>
          </div>
        </div>

        <div className="project">
          <div className="project-image">
            <img src="/images/social-calendar-big.PNG" alt=""/>
          </div>
          <div className="project-info">
            <a href="">View Live</a>
            <a href="">View Source</a>
          </div>
        </div>

        <div className="project">
          <div className="project-image">
            <img src="/images/social-calendar-big.PNG" alt=""/>
          </div>
          <div className="project-info">
            <a href="">View Live</a>
            <a href="">View Source</a>
          </div>
        </div>

        <div className="project">
          <div className="project-image">
            <img src="/images/social-calendar-big.PNG" alt=""/>
          </div>
          <div className="project-info">
            <a href="">View Live</a>
            <a href="">View Source</a>
          </div>
        </div>
      </div>

      

      
    
    </div>


  )
}

export default Portfolio;