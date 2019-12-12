const express = require("express");
const mailer = require("nodemailer");
const email = process.env.EMAIL;
const pass = process.env.PASS;
const port = process.env.PORT;

const server = express();

server.post("/", (req, res) => {
  res.send(
    JSON.stringify({
      message: "success"
    })
  );
});

server.listen(port, () => console.log(`Listening on port ${port}`));
