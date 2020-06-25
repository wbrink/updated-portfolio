import React from "react";
import "./style.css";

function Portfolio({margin}) {
  return (
    <div className="container-2" style={{marginLeft: `${margin}px`}}>
      <h1 className="title">Portfolio</h1>

      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
        
        
        <div className="project">

          {/* fake macos browser */}
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="grey"></div>
          {/* project photo */}
          <div className="project-image">
            <img src="/images/social-calendar-big.PNG" alt=""/>
          </div>

          {/* shows the projects text info and links */}
          <div className="project-info">
            <h3 style={{textAlign: "center", marginBottom: "10px"}}>Social Calendar</h3>
            <p style={{textAlign: "center", marginBottom: "30px"}}>Calendar app that allows you to sign in and create events and view your friends calendars. Made with ReactJS Node and MongoDB with Mongoose</p>
            <p style={{marginBottom: "3px", width: "160px", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>Demo Credentials: </p>
            <div className="demo-credentials"><div>Username: </div><div>A</div></div>
            <div className="demo-credentials" style={{marginBottom: "20px"}}><div>Password: </div><div>123456</div> </div>
            
            {/* links */}
            <div className="d-flex justify-evenly">
              <a href="">View Live</a>
              <a href="">View Source</a>
            </div>
            
          </div>
        </div>

        <div className="project">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="grey"></div>
          <div className="project-image">
            <img src="/images/chit-chat.jpg" alt=""/>
          </div>
          <div className="project-info">
            <h3 style={{textAlign: "center", marginBottom: "10px"}}>Chit Chat</h3>
            <p style={{textAlign: "center", marginBottom: "30px"}}>Chat Application that allows you to video chat with another person. Uses webrtc for video and socket.io for both the text chat and video chat.</p>
            <p style={{marginBottom: "3px", width: "160px", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>Demo Credentials: </p>
            <div className="demo-credentials"><div>Username: </div><div>Mike</div></div>
            <div className="demo-credentials" style={{marginBottom: "20px"}}><div>Password: </div><div>123456</div> </div>

            <div className="d-flex justify-evenly">
              <a href="">View Live</a>
              <a href="">View Source</a>
            </div>
            
          </div>
        </div>

        <div className="project">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="grey"></div>
          <div className="project-image">
            <img src="/images/social-calendar-big.PNG" alt=""/>
          </div>
          <div className="project-info">
            <h3 style={{textAlign: "center", marginBottom: "10px"}}>Social Calendar</h3>
            <p style={{textAlign: "center", marginBottom: "30px"}}>Calendar app that allows you to sign in and create events and view your friends calendars</p>

            <div className="d-flex justify-evenly">
              <a href="">View Live</a>
              <a href="">View Source</a>
            </div>
            
          </div>
        </div>

        <div className="project">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="grey"></div>
          <div className="project-image">
            <img src="/images/social-calendar-big.PNG" alt=""/>
          </div>
          <div className="project-info">
            <h3 style={{textAlign: "center", marginBottom: "10px"}}>Social Calendar</h3>
            <p style={{textAlign: "center", marginBottom: "30px"}}>Calendar app that allows you to sign in and create events and view your friends calendars</p>

            <div className="d-flex justify-evenly">
              <a href="">View Live</a>
              <a href="">View Source</a>
            </div>
            
          </div>
        </div>
      
      
      
      </div>

      

      
    
    </div>


  )
}

export default Portfolio;