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
  if (!/.{2,}/gi.test(req.body.name)) {
    return res.send({ message: "missing name" });
  } else if (!/.{3,}/gi.test(req.body.subject)) {
    return res.send({ message: "missing subject" });
  } else if (!/.{5,}/gi.test(req.body.text)) {
    return res.send({ message: "missing text" });
  } else if (!/.+@.+\..+/gi.test(req.body.email)) {
    return res.send({ message: "missing email" });
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
