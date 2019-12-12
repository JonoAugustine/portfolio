const express = require("express");
const mailer = require("nodemailer");
const email = process.env.EMAIL;
const pass = process.env.PASS;
const port = process.env.PORT ? process.env.PORT : 69420;

const server = express();

server.post("/", (req, res) => {
  console.log(req.body);
  res.send(
    JSON.stringify({
      message: "success"
    })
  );
});

server.listen(port, () => console.log(`Listening on port ${port}`));
