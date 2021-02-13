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
  /**
   * @param {string} propName
   * @param {RegExp} regex
   * @returns {boolean}
   */
  Object.prototype.validateString = (propName, regex) => {
    return typeof this[propName] === "string" && regex.test(this[propName]);
  };

  if (!req.body.validateString("name", /.{2,}\s+.{2,}/gi)) {
    return res.status(400).send({ message: "missing name" });
  } else if (!req.body.validateString("subject", /.{3,}/gi)) {
    return res.status(400).send({ message: "missing subject" });
  } else if (!req.body.validateString("text", /.{5,}/gi)) {
    return res.status(400).send({ message: "missing text" });
  } else if (!req.body.validateString("email", /.+@.+\..+/gi)) {
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
      res.status(500).send({ message: "failed" });
    } else {
      console.log("Email sent", info);
      res.status(200);
    }
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
