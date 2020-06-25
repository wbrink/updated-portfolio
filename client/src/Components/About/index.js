import React from "react";
import "./style.css";

function About(props) {
  return (
    <div className="container" style={{marginLeft: `${props.margin}px`}} >
      <h1 className="title">About</h1>
      <p>
        Hi there! My name is will and I am currently enrolled in a coding bootcamp for web development. I am excited
        to try and gain the skills necessary to build websites both on the front end and backend. The little
        programming knowledge I have are a few pet projects with python so the opportunity to dive into popular web
        technologies such as javascript will be very new and fun to try and grasp.
      </p>
      <p>
        When not programming my hobbies include golf and spending time with family. Working at a golf course made the
        sport very accessible for me. I played a lot growing up and was lucky enough to play two years in college. I
        enjoy spending time with family and love throwing a ball for my dog Buster at the park.
      </p>
    </div>
  )
}

export default About;