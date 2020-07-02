const express = require("express");
const app = express();
const path = require("path");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.userEmail,
    pass: process.env.userPassword
  }
});


const PORT = process.env.PORT || 3001;

app.use(express.json());

// if in production use build folder as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
}

app.post("/api/contact", (req,res) => {
  const email = req.body.email;
  const message = req.body.message;

  const msg = {
    from: process.env.userEmail,
    to: process.env.toEmail,
    subject: "contact form",
    html: `<h1>${email}</h1>
    <p>${message}</p>`
  }

  transporter.sendMail(msg, (err, info) => {
    if (err) {
      console.log(err);
      return res.json({err: "there was an error"})
    } else {
      return res.json({success: "msg sent successfully"})
    }
  })
  
  // res.json({msg: "msg recieved", message: message, email:email});
})

// send all other requests to index.html so react takes over
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})


app.listen(PORT, () => console.log("Server listening on PORT", PORT));