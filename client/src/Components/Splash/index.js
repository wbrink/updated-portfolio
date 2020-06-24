import React, {useState} from "react";
import "./style.css";

function Splash(props) {
  return (
    <div className="" style={{marginLeft: `${props.margin}px`}}>
      <div className="splash">
        <div className="overlay">
          <h1 id="splash-title">Full Stack Web Developer</h1>
          <div className="button">View Porfolio</div>
          <div className="button">View Resume</div>

        </div>

      </div>
    </div>
    
  )
}

export default Splash;