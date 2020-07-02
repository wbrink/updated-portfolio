import React, {useState} from "react";

import "./style.css";


function Contact(props) {

  const [email, setEmail] = useState(false);
  const [message, setMessage] = useState(false);


  // submit the form
  const handleSubmit = (e) => {
    e.preventDefault();

    // if email or message is not filled out don't let the message submit
    if (!email || !message) {
      console.log("message and email must be filled out");
      return;
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
        console.log(data);
      })
  }

  return (
    <div className="container" style={{marginLeft: `${props.margin}px`}} id="contact" >
      <h1 className="title">Contact</h1>

      <form action="" onSubmit={(e) => {handleSubmit(e)}}>
        {/* email */}
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={e => {setEmail(e.target.value)}}/>

        {/* message */}
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="15" onChange={e => {setMessage(e.target.value)}}/>
        <button id="submit-message-button" type="submit">Submit</button>
      </form>
    </div>
    
  )
}

export default Contact;