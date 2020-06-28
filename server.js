const express = require("express");
const app = express();
const path = require("path");
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 3001;

// if in production use build folder as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
}


// send all other requests to index.html so react takes over
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})


app.listen(PORT, () => console.log("Server listening on PORT", PORT));