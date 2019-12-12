const express = require("express");
const port = process.env.PORT ? process.env.PORT : 6920;
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const mailer = require("nodemailer");
const email = process.env.EMAIL;
const pass = process.env.PASS;
const transporter = mailer.createTransport({
  service: "gmail",
  auth: { user: email, pass: pass }
});

server.post("/", (req, res) => {
  const mailOptions = {
    from: email,
    to: "me@jonoaugustine.com",
    subject: req.body.subject ? req.body.subject : "NO SUBJECT",
    text: req.body.text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send(JSON.stringify({ message: "failed" }));
    } else {
      console.log("Email sent: " + info);
      res.send(JSON.stringify({ message: "sent" }));
    }
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));