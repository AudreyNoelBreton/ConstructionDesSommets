const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use(express.json());

app.post("/send-email", upload.single("plan"), (req, res) => {
  const { nom, numero, lieu, resume, delais, courriel } = req.body;
  const plan = req.file;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  });

  const mailOptions = {
    from: "your-email@gmail.com",
    to: "recipient@example.com",
    subject: "Demande de soumission",
    text: `
      Nom: ${nom}
      Numéro de téléphone: ${numero}
      Lieu des travaux: ${lieu}
      Résumé du projet: ${resume}
      Délais souhaité: ${delais}
      Courriel: ${courriel}
    `,
    attachments: [
      {
        filename: plan.originalname,
        path: plan.path,
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    fs.unlink(plan.path, (err) => {
      if (err) {
        console.error(err);
      }
      res.status(200).send("Email sent: " + info.response);
    });
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
