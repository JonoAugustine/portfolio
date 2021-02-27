const express = require("express");
const cors = require("cors");
const port = process.env.PORT ? process.env.PORT : 6920;
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const mailer = require("nodemailer");
const email = process.env.EMAIL;
const pass = process.env.PASS;
const transporter = mailer.createTransport({
  host: "mail.hover.com",
  secureConnection: true,
  port: 465,
  auth: { user: email, pass: pass },
  tls: { secureProtocol: "TLSv1_method" },
});

server.use(function (_, res, next) {
  // only allow my site
  res.setHeader("Access-Control-Allow-Origin", "jonoaugustine.com");

  // allow GET and POST
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Pass to next layer of middleware
  next();
});

/** Redirect GET to portfolio */
server.get("/", (_, res) => res.redirect("https://jonoaugustine.com"));

/** Take POST to send email */
server.post("/", cors({ origin: "https://jonoaugustine.com" }), (req, res) => {
  const invalidString = (string, regex) => {
    return typeof string === "string" && regex.test(string);
  };

  if (invalidString(req.body.name, /.{2,}\s+.{2,}/gi)) {
    return res.status(400).send({ message: "missing name" });
  } else if (invalidString(req.body.subject, /.{3,}/gi)) {
    return res.status(400).send({ message: "missing subject" });
  } else if (invalidString(req.body.text, /.{5,}/gi)) {
    return res.status(400).send({ message: "missing text" });
  } else if (invalidString(req.body.email, /.+@.+\..+/gi)) {
    return res.status(400).send({ message: "missing email" });
  }

  if (process.argv[2] == "local") return res.send({ message: "sent" });

  const mailOptions = {
    from: email,
    to: "swordmaster9@gmail.com",
    subject: `${req.body.name}:${req.body.subject}`,
    text: `${req.body.name}:\n${req.body.text}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send({ message: "failed" });
    } else {
      console.log("Email sent", info);
      return res.status(200).send("Email sent");
    }
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
