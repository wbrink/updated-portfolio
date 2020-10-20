import React, { useRef, useEffect } from "react";
import "./style.css";

function Portfolio({margin}) {
  return (    
    <div className="container-2" style={{marginLeft: `${margin}px`}} id="portfolio">
      <h1 className="title" style={{marginBottom: "70px"}}>Portfolio</h1>

      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
        
        {/* Social Calendar */}
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
            <h3 style={{textAlign: "center", marginBottom: "10px", textTransform: "uppercase"}}>Social Calendar</h3>
            <p style={{marginBottom: "20px", textJustify: "inter-word"}}>Calendar app that allows you to sign in and create events and view your friends calendars. Made with ReactJS Node and MongoDB with Mongoose.</p>
            <p style={{marginBottom: "3px", width: "160px", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>Demo Credentials: </p>
            <div className="demo-credentials"><div>Username: </div><div>A</div></div>
            <div className="demo-credentials" style={{marginBottom: "20px"}}><div>Password: </div><div>123</div> </div>

            <div style={{marginBottom: "20px", width: "100%", textAlign: "center", color: "#EE665A"}}>Deployed on Heroku: Startup may take a while</div>
            
            {/* links */}
            <div className="d-flex justify-evenly">
              <a href="https://socialcalendar-app.herokuapp.com/" target="_blank">View Live</a>
              <a href="https://github.com/wbrink/social-calendar" target="_blank">View Source</a>
            </div>
            
          </div>
        </div>

        {/* Chat Application */}
        <div className="project">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="grey"></div>
          <div className="project-image">
            <img src="/images/chit-chat.jpg" alt=""/>
          </div>
          <div className="project-info">
            <h3 style={{textAlign: "center", marginBottom: "10px", textTransform: "uppercase"}}>Chit Chat</h3>
            <p style={{marginBottom: "20px", textJustify: "inter-word"}}>Chat Application that allows you to video chat with another person. Uses webrtc for video and socket.io for both the text chat and video chat.</p>
            <p style={{marginBottom: "3px", width: "160px", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>Demo Credentials: </p>
            <div className="demo-credentials"><div>Username: </div><div>test</div></div>
            <div className="demo-credentials" style={{marginBottom: "20px"}}><div>Password: </div><div>123456</div> </div>

            <div style={{marginBottom: "20px", width: "100%", textAlign: "center", color: "#EE665A"}}>Deployed on Heroku: Startup may take a while</div>
            <div className="d-flex justify-evenly">
              <a href="https://chit-chat-cam.herokuapp.com/" target="_blank">View Live</a>
              <a href="https://github.com/wbrink/Chat-Cam" target="_blank">View Source</a>
            </div>
            
          </div>
        </div>

        {/* Orbitals App */}
        <div className="project">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="grey"></div>
          <div className="project-image">
            <img src="/images/nasa-app.PNG" alt=""/>
          </div>
          <div className="project-info">
            <h3 style={{textAlign: "center", marginBottom: "10px", textTransform: "uppercase"}}>Orbitals App</h3>
            <p style={{textAlign: "center", marginBottom: "30px"}}>Client-side app that uses Nasa API to track asteroids and WTIA REST API to track the ISS using Leaflet.JS for the map.</p>

            <div className="d-flex justify-evenly">
              <a href="https://wbrink.github.io/my-nasa-app/" target="_blank">View Live</a>
              <a href="https://github.com/wbrink/my-nasa-app" target="_blank">View Source</a>
            </div>
            
          </div>
        </div>

        {/* Employee Directory */}
        <div className="project">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="grey"></div>
          <div className="project-image">
            <img src="/images/employee-directory.PNG" alt=""/>
          </div>
          <div className="project-info">
            <h3 style={{textAlign: "center", marginBottom: "10px", textTransform: "uppercase"}}>Employee Directory</h3>
            <p style={{textAlign: "center", marginBottom: "30px"}}>React app that shows users in and allows for real time filtering by name. The column headers can be clicked on to sort.</p>

            <div className="d-flex justify-evenly">
              <a href="https://wbrink.github.io/employee-directory/" target="_blank">View Live</a>
              <a href="https://github.com/wbrink/employee-directory/tree/master" target="_blank">View Source</a>
            </div>
            
          </div>
        </div>
      

        {/* Weather Dashboard */}
        <div className="project">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="grey"></div>
          <div className="project-image">
            <img src="/images/weather-dashboard.PNG" alt=""/>
          </div>
          <div className="project-info">
            <h3 style={{textAlign: "center", marginBottom: "10px", textTransform: "uppercase"}}>Weather Dashboard</h3>
            <p style={{textAlign: "center", marginBottom: "30px"}}>Client-side weather dashboard that makes API calls to OpenWeatherMap to retrieve the weather for the user designated location</p>

            <div className="d-flex justify-evenly">
              <a href="https://wbrink.github.io/weather-dashboard" target="_blank">View Live</a>
              <a href="https://github.com/wbrink/weather-dashboard" target="_blank">View Source</a>
            </div>
            
          </div>
        </div>

        {/* Coding Quiz */}
        <div className="project">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="grey"></div>
          <div className="project-image">
            <img src="/images/coding-quiz.PNG" alt=""/>
          </div>
          <div className="project-info">
            <h3 style={{textAlign: "center", marginBottom: "10px", textTransform: "uppercase"}}>Coding Quiz</h3>
            <p style={{textAlign: "center", marginBottom: "30px"}}>Client-side javascript coding game. Single page application that stores high scores in browser's localStorage</p>

            <div className="d-flex justify-evenly">
              <a href="https://wbrink.github.io/code-quiz/" target="_blank">View Live</a>
              <a href="https://github.com/wbrink/code-quiz" target="_blank">View Source</a>
            </div>
            
          </div>
        </div>
      
      
      </div>

      

      
    
    </div>


  )
}

export default Portfolio;