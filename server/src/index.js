const express = require("express");
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
  auth: {
    user: email,
    pass: pass
  },
  tls: {
    secureProtocol: "TLSv1_method"
  }
});

server.post("/", (req, res) => {
  /**
   * @param {string} propName
   * @param {RegExp} regex
   * @returns {boolean}
   */
  Object.prototype.validateString = function(propName, regex) {
    return typeof this[propName] === "string" && regex.test(this[propName]);
  };
  
  if (!req.body.validateString("name", /.{2,}/gi)) {
    return res.status(400).send({ message: "missing name" });
  } else if (!req.body.validateString("subject", /.{3,}/gi)) {
    return res.status(400).send({ message: "missing subject" });
  } else if (!req.body.validateString("text", /.{5,}/gi)) {
    return res.status(400).send({ message: "missing text" });
  } else if (!req.body.validateString("email", /.+@.+\..+/gi)) {
    return res.status(400).send({ message: "missing email" });
  }

  if (process.argv[2] == "local") {
    return res.send({ message: "sent" });
  }

  const mailOptions = {
    from: email,
    to: "swordmaster9@gmail.com",
    subject: `${req.body.name}:${req.body.subject}`,
    text: `${req.body.name}:\n${req.body.text}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send({ message: "failed" });
    } else {
      console.log("Email sent", info);
      res.send({ message: "sent" });
    }
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
