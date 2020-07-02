import React, {useState, useEffect} from "react";

import "./style.css";
import Feedback from "../Feedback";


function Contact(props) {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackProps, setFeedbackProps] = useState({
    message: "",
    color: "red",
  })

  const [opacity, setOpacity] = useState(0);


  // submit the form
  const handleSubmit = (e) => {
    e.preventDefault();

    // if email or message is not filled out don't let the message submit
    if (!email || !message) {
      console.log("message and email must be filled out");
      setFeedbackProps({
        message: "Please fill out all fields",
        color: "red",
      })
      setOpacity(1);
    }

    const data = {
      email: email,
      message: message
    }

    // make fetch call to api to send email message
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => {
        if (data.hasOwnProperty("err")) {
          console.log("error occurred try again");
          setFeedbackProps({
            message: "Message Failed To Send",
          })
          setOpacity(1);
        } else {
          setEmail("");
          setMessage("");
          console.log("message sent successfully");
          setFeedbackProps({
            ...feedbackProps,
            message: "Message Sent",
            color: "green",
          });
          setOpacity(1);

        }
      })
  }


  // when feedback state is changed then add timeout that fades out feedback component
  useEffect(() => {
    setTimeout(() => {
      setOpacity(0)
    }, 5000)
  }, [feedbackProps])

 

  return (
    <div className="container" style={{marginLeft: `${props.margin}px`}} id="contact" >
      <h1 className="title">Contact</h1>

      <form action="" onSubmit={(e) => {handleSubmit(e)}}>
        {/* email */}
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={e => {setEmail(e.target.value)}} value={email}/>

        {/* message */}
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="15" onChange={e => {setMessage(e.target.value)}} value={message}/>
        <Feedback {...feedbackProps} opacity={opacity}/>
        <button id="submit-message-button" type="submit">Submit</button>
      </form>
    </div>
    
  )
}

export default Contact;